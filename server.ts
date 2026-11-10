import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory data store with file backup for persistence
interface Submission {
  id: string;
  type: 'vip' | 'jv' | 'referral' | 'contact';
  data: Record<string, any>;
  createdAt: string;
}

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadSubmissions(): Submission[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Error loading submissions:', err);
  }
  return [];
}

function saveSubmissions(submissions: Submission[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving submissions:', err);
  }
}

let submissions: Submission[] = loadSubmissions();

function generateRefId(prefix: string) {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomNum}`;
}

// API Endpoints

// 1. VIP Buyers List Registration
app.post('/api/vip-signup', (req, res) => {
  const { firstName, lastName, email, phone, investorType, budgetRange, preferredLocations, investmentType, consent } = req.body;

  if (!firstName || !lastName || !email || !phone || !investorType || !investmentType) {
    res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Email, Phone, Investor Type, and Investment Type).',
    });
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
    return;
  }

  const refId = generateRefId('KLD-VIP');
  const record: Submission = {
    id: refId,
    type: 'vip',
    data: {
      firstName,
      lastName,
      email,
      phone,
      investorType,
      budgetRange: budgetRange || 'Flexible',
      preferredLocations: preferredLocations || 'All Available Regions',
      investmentType,
      consent: Boolean(consent),
    },
    createdAt: new Date().toISOString(),
  };

  submissions.unshift(record);
  saveSubmissions(submissions);

  console.log(`[VIP Registration] ${firstName} ${lastName} (${email}) - Ref: ${refId}`);

  res.status(201).json({
    success: true,
    referenceId: refId,
    message: 'Thank you for joining our VIP Buyers List. Our acquisition team has logged your investor preferences.',
    data: record.data,
  });
});

// 2. Joint Venture Inquiry
app.post('/api/jv-inquiry', (req, res) => {
  const { name, email, phone, role, capitalAvailable, targetMarkets, message } = req.body;

  if (!name || !email || !phone) {
    res.status(400).json({
      success: false,
      error: 'Please complete your contact details (Name, Email, and Phone number).',
    });
    return;
  }

  const refId = generateRefId('KLD-JV');
  const record: Submission = {
    id: refId,
    type: 'jv',
    data: {
      name,
      email,
      phone,
      role: role || 'Capital Partner',
      capitalAvailable: capitalAvailable || 'Undisclosed',
      targetMarkets: targetMarkets || 'Flexible',
      message: message || '',
    },
    createdAt: new Date().toISOString(),
  };

  submissions.unshift(record);
  saveSubmissions(submissions);

  console.log(`[JV Inquiry] ${name} (${email}) - Ref: ${refId}`);

  res.status(201).json({
    success: true,
    referenceId: refId,
    message: 'Joint Venture inquiry submitted. An executive partner from KLD will review your parameters.',
    data: record.data,
  });
});

// 3. Property Referral Submission
app.post('/api/referral', (req, res) => {
  const { referrerName, referrerEmail, referrerPhone, propertyAddress, propertyType, notes } = req.body;

  if (!referrerName || !referrerEmail || !referrerPhone || !propertyAddress) {
    res.status(400).json({
      success: false,
      error: 'Please provide your contact info and the property address/details.',
    });
    return;
  }

  const refId = generateRefId('KLD-REF');
  const record: Submission = {
    id: refId,
    type: 'referral',
    data: {
      referrerName,
      referrerEmail,
      referrerPhone,
      propertyAddress,
      propertyType: propertyType || 'Residential Off-Market',
      notes: notes || '',
    },
    createdAt: new Date().toISOString(),
  };

  submissions.unshift(record);
  saveSubmissions(submissions);

  console.log(`[Property Referral] From ${referrerName} for ${propertyAddress} - Ref: ${refId}`);

  res.status(201).json({
    success: true,
    referenceId: refId,
    message: 'Property referral inquiry successfully logged. Our acquisitions desk will review the lead.',
    data: record.data,
  });
});

// 4. General Contact / Inquiries
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({
      success: false,
      error: 'Please fill in Name, Email, and Message.',
    });
    return;
  }

  const refId = generateRefId('KLD-MSG');
  const record: Submission = {
    id: refId,
    type: 'contact',
    data: { name, email, phone: phone || '', subject: subject || 'General Inquiry', message },
    createdAt: new Date().toISOString(),
  };

  submissions.unshift(record);
  saveSubmissions(submissions);

  res.status(201).json({
    success: true,
    referenceId: refId,
    message: 'Your inquiry has been received. A representative from KLD Investments & Consulting will follow up shortly.',
  });
});

// 5. Query user submission status by reference ID
app.get('/api/submission/:id', (req, res) => {
  const found = submissions.find((s) => s.id.toUpperCase() === req.params.id.toUpperCase());
  if (found) {
    res.json({ success: true, submission: found });
  } else {
    res.status(404).json({ success: false, error: 'Reference ID not found.' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist in production
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.use('/assets/images', express.static(path.join(__dirname, 'public/assets/images')));
    app.use('/images', express.static(path.join(__dirname, 'public/images')));
    app.use('/src/assets/images', express.static(path.join(__dirname, 'src/assets/images')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`KLD Investments & Consulting server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
