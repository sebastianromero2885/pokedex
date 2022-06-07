import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MyContext from "../context/context.js";
import { useState } from "react";
import type { Pokemon } from "../interfaces/interfaces";

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<Pokemon>();
  const [pokemon_encontrado, setPokemonEncontrado] = useState<Pokemon>();
  return (
    <MyContext.Provider
      value={{ data, setData, pokemon_encontrado, setPokemonEncontrado }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MyContext.Provider>
  );
}

export default MyApp;
