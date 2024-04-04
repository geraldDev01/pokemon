"use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import pokemonIcon from "@/assets/images/pokemon.jpeg";

import "@/styles/main.scss";
import { Card } from "@/components/Card";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };
  const onDetailsClick = (query: string) => {
    console.log("Searching for:", query);
  };

  const pokemonExample = {
    id: 1,
    name: "pikachu",
    imageUrl: "http://",
    detailsUrl: "http://",
  };
  return (
    <main>
      <Header />
      <section className="home-container">
        <figure>
          <Image
            src={pokemonIcon}
            alt="pokemon logo"
            width="auto"
            height={150}
            priority
          />
        </figure>
        <SearchInput onSearch={handleSearch} />
      </section>
      <section>
        <Card pokemon={pokemonExample} />
      </section>
    </main>
  );
}
