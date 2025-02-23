import Image from "next/image";
import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts";
export default function Home() {
  return (
    <main>
      <Hero />
      <MainProducts />
      <Description />
    </main>
  );
}
