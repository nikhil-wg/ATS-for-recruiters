import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { to, candidateName = 'Candidate' } = req.body;

  const subject = `Congratulations ${candidateName}, You’re Shortlisted for SDE Role at Kanaka!`;
  const html = `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
      <h2 style="color: #2b4eff;">🎉 You're Shortlisted!</h2>
      <p>Dear <strong>${candidateName}</strong>,</p>
      <p>We are thrilled to inform you that you have been <strong>shortlisted</strong> for the role of <strong>Software Development Engineer (SDE)</strong> at <strong>Kanaka</strong>.</p>

      <p>We appreciate the time and effort you invested in the application process, and your profile truly stood out to our team.</p>

      <div style="background: #eaf4ff; padding: 15px; border-left: 4px solid #2b4eff; margin: 20px 0;">
        📌 <strong>Next Steps:</strong><br>
        The detailed guidelines and interview schedule will be shared with you shortly via this email.
      </div>

      <p>We look forward to connecting with you soon. Stay tuned!</p>

      <p style="margin-top: 30px;">Warm regards,<br>
      <strong>Kanaka Recruitment Team</strong><br>
      <a href="mailto:hr@kanaka.com" style="color: #2b4eff;">hr@kanaka.com</a></p>
    </div>
  `;

  const mailOptions = {
    from: `Kanaka Recruiter <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: `Shortlist email sent to ${to}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Email sending failed' });
  }
});