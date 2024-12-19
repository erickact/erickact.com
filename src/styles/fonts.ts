import { Besley, Source_Code_Pro } from "next/font/google";
export const besley = Besley({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-besley",
  weight: ["400", "700"],
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});
