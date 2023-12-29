import { ReactNode } from "react";
import "../../css/header.css";
import "../../css/footer.css";
import "../../css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Main } from "./main/Main";
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
