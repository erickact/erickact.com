import type { Metadata } from "next";

import "@/styles/globals.css";
import { besley, sourceCodePro } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "erickact.com",
  description:
    "Hey, I'm Ericka Castillo. I'm a Software Engineer building products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${besley.variable} ${sourceCodePro.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
