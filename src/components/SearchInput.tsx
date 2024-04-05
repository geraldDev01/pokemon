import Image from "next/image";
import searchIcon from "@/assets/images/search.svg";
import debounce from "lodash.debounce"
import { usePokemonContext } from "@/context/PokemonContext/PokemonContext";

export const SearchInput: React.FC = () => {
  const { setSearch, setCurrentPage, setPokemonCards, search } = usePokemonContext();

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
    </div>
  );
};


