import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import MyContext from "../context/context.js";
import { useState } from "react";
import type { Pokemon } from "../interfaces/interfaces";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  const [pokemones_aux, setPokemonesAux] = useState<Pokemon[]>([]);
  const [orden, setOrden] = useState<string>("asc");
  const [atributo, setAtributo] = useState<string>("nombre");


  const colors = {
    light: {
      100: "#5CC7B8",
      200: "#00B4C7",
      300: "#00B4C7",
      400: "#3B83CB",
      500: "#7164B2",
      600: "#8F4087",
    },
  };

  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }

  const theme = extendTheme({ config, colors });

  return (
    <MyContext.Provider
      value={{ pokemones, setPokemones, pokemones_aux, setPokemonesAux, orden, setOrden, atributo, setAtributo }}
    >
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </MyContext.Provider>
  );
}

export default MyApp;
