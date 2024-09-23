import { Customers, Footer, Hero, Products, TopSelling } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopSelling />
      <Products />
      <Customers />
      <Footer />
    </div>
  );
}
