import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI-SMS-Agent | Supercharge Your Sales with AI-Powered SMS',
  description: 'Transform your sales process with intelligent messaging that converts leads into customers. AI-SMS-Agent helps sales professionals onboard more leads and boost conversion rates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" expand={true} richColors />
      </body>
    </html>
  );
}