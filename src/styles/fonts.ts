import { Besley, Source_Code_Pro, Ms_Madi } from "next/font/google";
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

export const msMadi = Ms_Madi({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ms-madi",
  weight: ["400"],
});
