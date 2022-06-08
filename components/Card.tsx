import React from "react";
import {
  Center,
  Flex,
  Heading,
  theme,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { RiSwordFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShieldFill } from "react-icons/bs";
import { Pokemon } from "../interfaces/interfaces";

function Card(pokemon: Pokemon) {
  return (
    <Flex
      padding="5px"
      flexDirection="column"
      width={{
        base: "90%",
        sm: "70%",
        md: "45%",
        lg: "30%",
        xl: "20%",
        "2xl": "20%",
      }}
      borderRadius="5px"
      boxShadow="2xl"
    >
      <Flex flexDirection="column" gap="4">
        <Heading as="h2" size="lg" color="light.600" alignSelf="center">
          {pokemon.nombre}
        </Heading>

        <Heading as="h2" size="xs" color="light.400" alignSelf="center">
          (Pokemon tipo {pokemon.tipo_pokemon})
        </Heading>

        <Center width="100%">
          <Image
            borderRadius="full"
            boxShadow="xl"
            src={pokemon.imagen}
            width="55%"
          ></Image>
        </Center>
      </Flex>

      <Grid
        marginTop="30px"
        marginBottom="20px"
        padding="10px"
        gridTemplateColumns="repeat(3, auto)"
        width="100%"
        justifyContent="space-between"
      >
        <GridItem>
          <Text fontSize="lg" color="light.500" fontWeight="bold">
            Ataque
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="center"
            gap="1"
            marginTop="10px"
          >
            <RiSwordFill size="1.5em" color={theme.colors.gray[600]} />
            <Text textAlign="center">{pokemon.ataque}</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize="lg" color="light.500" fontWeight="bold">
            Salud
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="center"
            gap="1"
            marginTop="10px"
          >
            <AiFillHeart size="1.5em" color={theme.colors.red[600]} />
            <Text textAlign="center">{pokemon.salud}</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize="lg" color="light.500" fontWeight="bold">
            Defensa
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="center"
            gap="1"
            marginTop="10px"
          >
            <BsFillShieldFill size="1.3em" color={theme.colors.blue[500]} />
            <Text textAlign="center">{pokemon.defensa}</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Card;
