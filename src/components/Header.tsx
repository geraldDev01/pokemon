import Link from "next/link";
import Image from "next/image";
import pokeballIcon from "@/assets/images/pokeball.svg";

export const Header = () => {
  return (
    <header className="Header">
      <div className="container Header-container">
        <Link href="/">
          <figure className="Header-logo">
            <Image src={pokeballIcon} alt="pokeball logo" />
          </figure>
        </Link>

        <nav className="Header-menu">
          <ul className="Header-links">
            <li className="Header-item">
              <Link className="Header-link" href="/">
                Pokemon List
              </Link>
            </li>
            <li>
              <Link className="Header-link" href="/">
                Option
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
