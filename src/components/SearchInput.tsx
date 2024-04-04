import Image from "next/image";
import searchIcon from "@/assets/images/search.svg";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="Search">
      <input
        type="text"
        className="Search-input"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <figure className="Search-icon">
        <Image src={searchIcon} alt="search icon" width={25} />
      </figure>
    </div>
  );
};

export default SearchInput;
