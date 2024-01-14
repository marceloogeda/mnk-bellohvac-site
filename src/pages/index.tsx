// ? components

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainContainer } from "@/components/MainContainer";

export default function Home() {
  return (
    <MainContainer headerPageTitle="Teste">
      <Header />
      <Hero />
    </MainContainer>
  );
}
