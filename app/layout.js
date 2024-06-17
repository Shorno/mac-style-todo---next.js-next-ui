import "./globals.css";
import {Providers} from "@/app/providers";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from 'geist/font/mono'


export const metadata = {
    title: "Next.js + Next UI Todo App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
