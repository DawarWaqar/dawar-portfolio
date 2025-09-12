import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dawar Waqar",
  description: "I am a passionate Software Engineer currently involved in Software Development, AI, Data, and Cloud. With extensive experience building scalable web applications, machine learning solutions, and distributed systems, I specialize in creating innovative technology solutions that solve real-world problems. My portfolio showcases diverse projects ranging from food rescue platforms connecting restaurants with NGOs to predictive analytics engines and automated cloud management tools. Based in Canada, I bring a unique blend of technical expertise and creative problem-solving to every project I undertake.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
