import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kPhone 16 Pro • KamalOS App Store | Kamal Mohamed',
  description:
    'Interactive kPhone 16 Pro running KamalOS 18 with Liquid Glass aesthetics and water-ripple physics. Explore builds, real estate underwriting engines, developer tools, and lab prototypes by Kamal Mohamed.',
  keywords: [
    'kPhone',
    'KamalOS',
    'Kamal Mohamed',
    'Personal App Store',
    'Full Stack Engineer',
    'LeadFlow NYC',
    'Customer Inbox Triage',
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
    <html lang="en" className="h-full antialiased dark overflow-hidden">
      <body className="h-full w-full overflow-hidden flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
