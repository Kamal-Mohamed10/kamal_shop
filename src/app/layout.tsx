import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Kamal's App Store | Personal Portfolio & Flagship Products",
  description:
    'Interactive personal App Store portfolio featuring a Liquid Glass interface with water-ripple physics, showcasing full-stack products, real estate underwriting engines, AI specs, and developer tools.',
  keywords: [
    'Kamal Mohamed',
    'Personal App Store',
    'Full Stack Engineer',
    'PropScope',
    'Next.js',
    'Portfolio',
    'TypeScript',
    'Liquid Glass',
  ],
  authors: [{ name: 'Kamal Mohamed' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
