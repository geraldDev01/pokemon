import Link from "next/link";
import Image from "next/image";
import pokeballIcon from "@/assets/images/pokeball.svg";

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="container Header-container">
        <Link href="/">
          <figure className="Header-logo">
            <Image
              src={pokeballIcon}
              alt="pokeball logo"
              width={50}
              height={50}
            />
          </figure>
        </Link>

        <nav className="Header-menu">
          <ul className="Header-links">
            <li className="Header-item">
              <Link href="/pokemon">
                <span className="Header-link">Pokemon APP</span>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};
