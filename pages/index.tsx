import type { NextPage } from "next";
import Card from "../components/Card";
import Header from "../components/Header";
import SortMenu from "../components/SortMenu";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { getPokemon } from "./api/api";
import { useContext, useEffect } from "react";
import MyContext from "../context/context";
import { Pokemon } from "../interfaces/interfaces";
import { OrdenarPokemones } from "../functions/functions";

const Home: NextPage = (props) => {
  const { pokemones, setPokemones, setPokemonesAux } = useContext(MyContext);
  const headercolor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    //Paso al contexto todos los datos que se van a usar
    setPokemones(Object.values(props)[0]);
    setPokemonesAux(Object.values(props)[0]);
  }, [setPokemones]);

  return (
    <Box>
      <Box
        position="fixed"
        bg={headercolor}
        paddingTop={{
          base: "3px",
          sm: "10px",
          md: "10px",
          lg: "10px",
          xl: "10px",
          "2xl": "10px",
        }}
        w="100%"
        boxShadow="md"
        paddingBottom="15px"
        top="0"
        zIndex="9999"
      >
        <Header></Header>
      </Box>

      <SortMenu></SortMenu>

      <Flex
        flexDirection="row"
        w="100%"
        h="100%"
        gap="10"
        flexWrap="wrap"
        justifyContent="space-around"
        padding="10px"
      >
        {pokemones.map((pokemon: Pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
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
  const get_data = await getPokemon();
  let data = OrdenarPokemones(Object.values(get_data), "asc", "nombre");

  return {
    props: {
      data,
    },
  };
}
