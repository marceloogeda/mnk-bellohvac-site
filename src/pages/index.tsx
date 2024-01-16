// ? components

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainContainer } from "@/components/MainContainer";
import { SectionBelloHvac } from "@/components/SectionBelloHvac";
import { SectionBrands } from "@/components/SectionBrands";
import { SectionSustainable } from "@/components/SectionSustainable";

export default function Home() {
  return (
    <MainContainer headerPageTitle="Home">
      <Header />
      {/* banner */}
      <Hero />
      {/* sessão 1 */}
      <SectionBelloHvac />
      {/* sessão 2 */}
      <SectionBrands />
      {/* sessão 3 */}
      <SectionSustainable />
    </MainContainer>
  );
}
