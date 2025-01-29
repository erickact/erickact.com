import type { Metadata } from "next";

import "@/styles/globals.css";
import { besley, msMadi, sourceCodePro } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Hey, I'm Ericka Castillo. I'm a Software Engineer building products",
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
      className={`${besley.variable} ${sourceCodePro.variable} ${msMadi.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
