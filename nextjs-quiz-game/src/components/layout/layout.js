import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "@/scss/index.scss";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;