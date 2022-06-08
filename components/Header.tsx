import { useContext, useState } from "react";
import {
  Flex,
  Image,
  Heading,
  Text,
  Input,
  Button,
  Box,
  useColorMode,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react'

import MyContext from "../context/context";
import type { Pokemon } from "../interfaces/interfaces";

function Header() {

  const [pokemon_buscado, setPokemonBuscado] = useState<string>("");
  const { data, setPokemonEncontrado } = useContext(MyContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const [ocultardarkmode] = useMediaQuery('(min-width: 650px)')

  console.log(ocultardarkmode)

  function BuscarPokemon(pokemon_buscado: string) {
    const resultado = data?.pokemones.filter((pokemon: Pokemon) => {
      return pokemon.nombre.includes(pokemon_buscado.toUpperCase());
    });

    setPokemonEncontrado(resultado);
  }

  return (
    <Box>
      {
        ocultardarkmode ? 

        <Button onClick={toggleColorMode} position="fixed" right="20" top="7">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      
      : null
      
      }

      <Flex flexDirection="row" justifyContent="center" gap="3">
        <Heading as="h1" size="3xl" lineHeight="1.15">
          Pokédex
        </Heading>

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          boxSize={{
            base: "60px",
            sm: "60px",
            md: "80px",
            lg: "80px",
            xl: "80px",
            "2xl": "80px",
          }}
          alt="pokebola"
        ></Image>
      </Flex>

      <Text
        fontSize={{
          base: "1.1rem",
          sm: "1.5rem",
          md: "1.5rem",
          lg: "1.5rem",
          xl: "1.5rem",
          "2xl": "1.5rem",
        }}
        align="center"
        marginTop="10px"
      >
        Buscá tu pokemon favorito y descubrí sus características.
      </Text>

      <Flex
        flexDirection="row"
        justifyContent="center"
        marginTop={{
          base: "10px",
          sm: "20px",
          md: "40px",
          lg: "40px",
          xl: "40px",
          "2xl": "40px",
        }}
        gap="1"
      >
        <Input
          size="lg"
          width="55%"
          value={pokemon_buscado}
          onKeyDown={(e) => {
            if (e.key === "Enter") BuscarPokemon(pokemon_buscado);
            window.scroll(0, 0);
          }}
          onChange={(e) => {
            setPokemonBuscado(e.target.value);
          }}
        />
        <Button
          leftIcon={<Search2Icon />}
          size="lg"
          colorScheme="blue"
          variant="solid"
          onClick={() => {
            BuscarPokemon(pokemon_buscado);
            window.scroll(0, 0);
          }}
        >
          Buscar
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
