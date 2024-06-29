import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'IM JK',
  description: 'Simple Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="dark w-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
