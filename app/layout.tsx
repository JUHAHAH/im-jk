import Header from '@/components/common/Header';
import type { Metadata } from 'next';
import './globals.scss';
import './main.scss';

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
      <body className="dark w-screen overflow-x-hidden">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
