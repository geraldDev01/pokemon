"use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { CardList } from "@/components/CardList";

import pokemonIcon from "@/assets/images/pokemon.jpeg";
import "@/styles/main.scss";

export default function Home() {

  return (
    <main>
      <Header />
      <section className="home-container">
        <figure>
          <Image
            src={pokemonIcon}
            alt="pokemon logo"
            height={150}
            priority
          />
        </figure>
        <SearchInput />
      </section>
      <section>
        <CardList />
      </section>
    </main>
  );
}
