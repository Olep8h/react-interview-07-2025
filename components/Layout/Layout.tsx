import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles["layout__content"]}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
