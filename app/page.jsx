import { Inter } from "@next/font/google";
import AboutSection from "../components/AboutSection";
import CardSection from "../components/CardSection";
import MainSection from "../components/MainSection";
import ProductsSection from "../components/ProductsSection";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <CardSection />
      <ProductsSection />
      <AboutSection />
    </main>
  );
}
