// ? components

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainContainer } from "@/components/MainContainer";
import { SectionArticles } from "@/components/SectionArticles";
import { SectionBelloHvac } from "@/components/SectionBelloHvac";
import { SectionBrands } from "@/components/SectionBrands";
import { SectionKnowMore } from "@/components/SectionKnowMore";
import { SectionManutence } from "@/components/SectionManutence";
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
      <SectionArticles />
      {/* sessão 4 */}
      <SectionManutence />
      {/* sessão 5 */}
      <SectionKnowMore />
      {/* sessão 7 */}
      <SectionSustainable />
    </MainContainer>
  );
}
