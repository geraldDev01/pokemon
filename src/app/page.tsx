"use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { CardList } from "@/components/CardList";

import pokemonIcon from "@/assets/images/pokemon.jpeg";
import "@/styles/main.scss";


export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <main>
      <Header />
      <section className="home-container">
        <figure>
          <Image
            src={pokemonIcon}
            alt="pokemon logo"
            // width="auto"
            height={150}
            priority
          />
        </figure>
        <SearchInput onSearch={handleSearch} />
      </section>
      <section>
        <CardList />
      </section>
    </main>
  );
}
