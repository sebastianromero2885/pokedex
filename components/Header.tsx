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
  Show,
} from "@chakra-ui/react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import MyContext from "../context/context";
import type { Pokemon } from "../interfaces/interfaces";
import { OrdenarPokemones } from "../functions/functions";

function Header() {
  const [pokemon_buscado, setPokemonBuscado] = useState<string>("");
  const { setPokemones, pokemones_aux, orden, atributo, pokemones} =
    useContext(MyContext);
  const { colorMode, toggleColorMode } = useColorMode();

  function BuscarPokemon(pokemon_buscado: string) {

    const resultado = pokemones_aux.filter((pokemon: Pokemon) => {
      return pokemon.nombre.includes(pokemon_buscado.toUpperCase());
    });

    if (resultado.length != pokemones_aux) {
      console.log( orden, '|', atributo)
      setPokemones(OrdenarPokemones(resultado, orden, atributo));
      console.log(pokemones)
    } else {
      console.log( orden, '|', atributo)
      setPokemones(OrdenarPokemones(pokemones_aux, orden, atributo));
      console.log(pokemones);
      
    }
  }

  return (
    <Box>
      <Show breakpoint="(min-width: 650px)">
        <Button onClick={toggleColorMode} position="fixed" right="20" top="7">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Show>

      <Flex flexDirection="row" justifyContent="center" gap="2">
        <Heading
          as="h1"
          size={{
            base: "2xl",
            sm: "3xl",
            md: "3xl",
            lg: "3xl",
            xl: "3xl",
            "2xl": "3xl",
          }}
          lineHeight="1.15"
        >
          Pokédex
        </Heading>

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          boxSize={{
            base: "45px",
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
          base: "0.5 rem",
          sm: "1.2rem",
          md: "1.3rem",
          lg: "1.3rem",
          xl: "1.3rem",
          "2xl": "1.3rem",
        }}
        align="center"
        marginTop="4 px"
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
          size={{
            base: "md",
            sm: "lg",
            md: "lg",
            lg: "lg",
            xl: "lg",
            "2xl": "lg",
          }}
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
          size={{
            base: "md",
            sm: "lg",
            md: "lg",
            lg: "lg",
            xl: "lg",
            "2xl": "lg",
          }}
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
