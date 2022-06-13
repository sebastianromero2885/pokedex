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
import { TbPokeball } from "react-icons/tb";
import { FaWater, FaGhost } from "react-icons/fa";
import { BsSnow, BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillBug, AiFillFire } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import {
  GiFist,
  GiFluffyWing,
  GiPoisonBottle,
  GiGroundSprout,
  GiHighGrass,
  GiElectric,
  GiShadowGrasp,
  GiFairyWand,
  GiPsychicWaves,
  GiSeaDragon,
} from "react-icons/gi";

import { BsFillShieldFill } from "react-icons/bs";
import { Pokemon } from "../interfaces/interfaces";

function definirIcono(tipo: string) {
  switch (tipo) {
    case "normal":
      return <TbPokeball color="#8F4087" fontSize="25px" />;
    case "lucha":
      return <GiFist color={theme.colors.black} fontSize="25px" />;
    case "volador":
      return <GiFluffyWing fontSize="25px" />;
    case "veneno":
      return <GiPoisonBottle color="#8F4087" fontSize="25px" />;
    case "tierra":
      return <GiHighGrass color={theme.colors.green[600]} fontSize="20px" />;
    case "roca":
      return <TbPokeball color="#8F4087" fontSize="25px" />;
    case "insecto":
      return <AiFillBug color={theme.colors.gray[700]} fontSize="25px" />;
    case "fantasma":
      return <FaGhost color={theme.colors.gray[700]} fontSize="25px" />;
    case "acero":
      return <TbPokeball color={theme.colors.black} fontSize="25px" />;
    case "fuego":
      return <AiFillFire color={theme.colors.red[400]} fontSize="25px" />;
    case "agua":
      return <FaWater color={theme.colors.blue[300]} fontSize="20px" />;
    case "planta":
      return <GiGroundSprout color={theme.colors.green[600]} fontSize="25px" />;
    case "eléctrico":
      return <GiElectric color={theme.colors.yellow[300]} fontSize="25px" />;
    case "psíquico":
      return <GiPsychicWaves color="#8F4087" fontSize="25px" />;
    case "hielo":
      return <BsSnow color={theme.colors.blue[500]} fontSize="25px" />;
    case "dragón":
      return <GiSeaDragon color="#8F4087" fontSize="25px" />;
    case "siniestro":
      return <MdDarkMode color="#8F4087" fontSize="25px" />;
    case "hada":
      return <GiFairyWand color={theme.colors.yellow[300]} fontSize="25px" />;
    case "desconocido":
      return (
        <BsFillQuestionCircleFill
          color={theme.colors.yellow[300]}
          fontSize="25px"
        />
      );
    case "sombra":
      return <GiShadowGrasp color="#8F4087" fontSize="25px" />;
    default:
      return <TbPokeball fontSize="25px" />;
  }
}

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

        <Heading
          as="h2"
          size="sm"
          color="light.400"
          alignSelf="center"
          alignItems="center"
          display="flex"
          flexDirection="row"
          gap="1.5"
        >
          Tipo {pokemon.tipo_pokemon} {definirIcono(pokemon.tipo_pokemon)}
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
