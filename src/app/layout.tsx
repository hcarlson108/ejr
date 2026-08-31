import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '../components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Emma Radtke',
  description: 'Actress and Singer based in Chicago, IL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='min-h-0 grow'>{children}</main>
        <footer>{<Footer />}</footer>
      </body>
    </html>
  );
}
