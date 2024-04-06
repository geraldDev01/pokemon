import Image from "next/image";
import searchIcon from "@/assets/images/search.svg";
import debounce from "lodash.debounce"
import sortIcon from "@/assets/images/sort.svg";
import { usePokemonContext } from "@/context/PokemonContext/PokemonContext";
import { useState } from "react";

export const SearchInput: React.FC = () => {
  const { setSearch, setCurrentPage, setPokemonCards, search, toggleSortOrder, sortOrder } = usePokemonContext();


  const debouncedFunction = debounce((text: string) => {
    setCurrentPage(0);
    setPokemonCards([]);
    setSearch(text);
  }, 1000);


  const updateSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const trimmed = value.trim()

    if (trimmed !== search) {
      debouncedFunction(trimmed)
    }
  }
  return (
    <div className="Search">
      <input
        type="text"
        className="Search-input"
        placeholder="Search..."
        onChange={updateSearch}
        autoComplete="off"
      />
      <figure className="Search-icon">
        <Image src={searchIcon} alt="search icon" width={25} />
      </figure>
      <figure className="Search-order-icon" onClick={toggleSortOrder}>
        <Image src={sortIcon} alt="order icon" width={30} />
      </figure>
      {sortOrder === 'asc' ? (
        <span>ASC</span>
      ) : (
        <span>DESC</span>
      )}
    </div>
  );
};


