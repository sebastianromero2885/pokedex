import type { NextPage } from "next";
import Card from "../components/Card";
import Header from "../components/Header";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { getPokemon } from "./api/api";
import { useContext, useEffect } from "react";
import MyContext from "../context/context";
import { Pokemon } from "../interfaces/interfaces";

const Home: NextPage = (props) => {
  const { data, setData, pokemon_encontrado } = useContext(MyContext);
  const headercolor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    //Paso al contexto todos los datos que se van a usar
    setData(props);
  }, [setData]);

  return (
    <Box>
      
      <Box
        position="fixed"
        bg={headercolor}
        paddingTop="10px"
        w="100%"
        boxShadow="md"
        paddingBottom="30px"
        top="0"
      >
        <Header></Header>
      </Box>

      <Flex
        flexDirection="row"
        w="100%"
        h="100%"
        gap="10"
        flexWrap="wrap"
        justifyContent="space-around"
        padding="10px"
        marginTop={{
          base: "230px",
          sm: "300px",
          md: "300px",
          lg: "300px",
          xl: "300px",
          "2xl": "300px",
        }}
      >
        {pokemon_encontrado
          ? pokemon_encontrado.map((pokemon: Pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  nombre={pokemon.nombre}
                  tipo_pokemon={pokemon.tipo_pokemon}
                  imagen={pokemon.imagen}
                  ataque={pokemon.ataque}
                  salud={pokemon.salud}
                  defensa={pokemon.defensa}
                ></Card>
              );
            })
          : data?.pokemones.map((pokemon: Pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  nombre={pokemon.nombre}
                  tipo_pokemon={pokemon.tipo_pokemon}
                  imagen={pokemon.imagen}
                  ataque={pokemon.ataque}
                  salud={pokemon.salud}
                  defensa={pokemon.defensa}
                ></Card>
              );
            })}
      </Flex>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const pokemones = await getPokemon();
  return {
    props: {
      pokemones,
    },
  };
}
