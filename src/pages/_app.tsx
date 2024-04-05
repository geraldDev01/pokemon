import { AppProps } from 'next/app';
import { PokemonProvider } from "@/context/PokemonContext/PokemonProvider";
import "@/styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <PokemonProvider>
    <Component {...pageProps} />
  </PokemonProvider>;
}

export default MyApp;