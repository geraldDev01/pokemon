import Image from "next/image";
import Link from "next/link";
import pokemonBanner from "@/assets/images/pokemonBanner.jpg"

export default function Page(): JSX.Element {
  return (
    <div>
      <section className="landing">
        <div className="landing-overlay">
          <div className="landing-inner">
            <div className="landing-banner-content">
              <figure>
                <Image
                  src={pokemonBanner}
                  alt="pokemon banner"
                  width={350}
                  priority
                />
              </figure>
            </div>
            <h1 className="landing-lg-text">COOLEST POKEMON LIST APP</h1>
            <p className="landing-md-text">
              YOU CAN LIST, SEARCH AND SEE DETAILS OF POKEMONS
            </p>
            <div className="landing-btn-container">
              <Link href="/pokemon" className="btn btn-primary">
                Start Exploring
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

