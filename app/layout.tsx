import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'E-commerce',
    description: 'E-commerce',
    icons: {
        icon: [{ url: '/public/logo.png' }],
        shortcut: ['/public/logo.png'],
        apple: [{ url: '/public/logo.png' }],
        other: [{ url: '/public/logo.png' }],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
