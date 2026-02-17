import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Footer } from '../src/components/layout/footer';
import { AppProviders } from '../src/providers/app-providers';
import { Header } from '../src/components/layout/header';

export const metadata: Metadata = {
  title: 'B2B Marketplace',
  description: 'B2B marketplace platform foundation',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Header />
          <div className="mx-auto min-h-[calc(100vh-140px)] w-full max-w-6xl px-6 py-8">{children}</div>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
