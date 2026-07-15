import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sandra Sunny — Product Manager",
  description:
    "PM specializing in AI adoption, health-tech, and product operations. Columbia MSBA '26. Former D.E. Shaw, Bloomberg, AVOMD.",
  openGraph: {
    title: "Sandra Sunny — Product Manager",
    description: "Closing the gap between AI capability and real-world adoption.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
