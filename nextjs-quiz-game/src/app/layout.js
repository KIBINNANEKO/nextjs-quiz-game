import Head from "next/head";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import "@/scss/index.scss";
import { ThemeProvider } from "@/context/theme";

export const metadata = {
  title: 'Valorant documentation',
  description: 'Valorant documentation using official Valorant API',
}

function RootLayout({ children }) {

  return (
    <html lang="en">
        <ThemeProvider>
          <div className="wrapper">
            <Header/>
              <main>
                {children}
              </main>
            <Footer/>
          </div>
        </ThemeProvider>
    </html>
  );
};

export default RootLayout;