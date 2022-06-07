import { useContext, useState } from "react";
import {
  Flex,
  Image,
  Heading,
  Text,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import MyContext from "../context/context";
import type { Pokemon } from "../interfaces/interfaces";

function Header() {
  const [pokemon_buscado, setPokemonBuscado] = useState<string>("");
  const { data, setPokemonEncontrado } = useContext(MyContext);

  function BuscarPokemon(pokemon_buscado: string) {
    const resultado = data?.pokemones.filter((pokemon: Pokemon) => {
      return pokemon.nombre.includes(pokemon_buscado.toUpperCase());
    });

    setPokemonEncontrado(resultado);
  }

  return (
    <Box>
      <Flex flexDirection="row" justifyContent="center" gap="3">
        <Heading as="h1" size="3xl" lineHeight="1.15">
          Pokédex
        </Heading>

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          boxSize="80px"
          alt="pokebola"
        ></Image>
      </Flex>

      <Text fontSize="1.5rem" align="center" marginTop="10px">
        Buscá tu pokemon favorito y descubrí sus características.
      </Text>

      <Flex
        flexDirection="row"
        justifyContent="center"
        marginTop="40px"
        gap="1"
      >
        <Input
          size="lg"
          width="55%"
          value={pokemon_buscado}
          onKeyDown={(e) => {
            if (e.key === "Enter") BuscarPokemon(pokemon_buscado);
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
          }}
        >
          Buscar
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
