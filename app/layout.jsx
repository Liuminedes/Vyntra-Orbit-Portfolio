import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/CustomCursor";
import { LangProvider } from "@/lib/LangContext";

export const metadata = {
  title: "Vyntra Orbit — Full-Stack Developer",
  description: "Vyntra Orbit. Full-stack developer crafting scalable digital products. React · Node.js · MySQL · Automation. Available for freelance worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ paddingTop: "clamp(72px, 6vw, 96px)" }}>
        <LangProvider>
          <CustomCursor />
          <StairTransition />
          <PageTransition>
            <Header />
            {children}
          </PageTransition>
        </LangProvider>
      </body>
    </html>
  );
}