import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Load Poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], 
});


export const metadata: Metadata = {
  title: "NextGen",
  description:
    "NextGen is a creative video editing agency helping brands, creators, and businesses produce high-quality, engaging videos that boost growth, engagement, and impact.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        {children}
         <Toaster />
      </body>
    </html>
  );
}
