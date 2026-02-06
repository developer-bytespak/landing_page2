import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: 'New Email Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Email Subscription</h2>
          <p>Someone has subscribed to your mailing list:</p>
          <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="color: #999; font-size: 12px;"><em>Subscribed on: ${new Date().toLocaleString()}</em></p>
        </div>
      `,
    });

    // Send confirmation to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Global Pardon - Email List',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome!</h2>
          <p>Thank you for subscribing to our mailing list.</p>
          <p>We'll keep you updated with the latest news and updates about our services.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Global Pardon Team</strong></p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to submit email' });
  }
}
