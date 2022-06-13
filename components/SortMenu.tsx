import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect} from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MyContext from "../context/context";
import { OrdenarPokemones } from "../functions/functions";

function SortMenu() {
  const { pokemones, setPokemones, orden, setOrden, atributo, setAtributo } = useContext(MyContext);

  useEffect(() => {
    if (pokemones.length > 0 && orden.length > 0 && atributo.length > 0) {
      const pokemones_ordenados = OrdenarPokemones(pokemones, orden, atributo);
      setPokemones(pokemones_ordenados);
    }
  }, [orden, atributo]);

  return (
    <Flex
      marginTop={{
        base: "170px",
        sm: "200px",
        md: "235px",
        lg: "235px",
        xl: "235px",
        "2xl": "235px",
      }}
      flexDirection="row"
      justifyContent="center"
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="blue"
          variant="solid"
        >
          Ordenar por
        </MenuButton>

        <MenuList>
          <MenuOptionGroup defaultValue="asc" title="Orden" type="radio">
            <MenuItemOption value="asc" onClick={(e) => setOrden("asc")}>
              Ascendente
            </MenuItemOption>
            <MenuItemOption value="des" onClick={(e) => setOrden("des")}>
              Descendente
            </MenuItemOption>
          </MenuOptionGroup>

          <MenuOptionGroup defaultValue="nombre" title="Atributo" type="radio">
            <MenuItemOption
              value="nombre"
              onClick={(e) => setAtributo("nombre")}
            >
              Nombre
            </MenuItemOption>
            <MenuItemOption
              value="ataque"
              onClick={(e) => setAtributo("ataque")}
            >
              Ataque
            </MenuItemOption>
            <MenuItemOption value="salud" onClick={(e) => setAtributo("salud")}>
              Salud
            </MenuItemOption>
            <MenuItemOption
              value="defensa"
              onClick={(e) => setAtributo("defensa")}
            >
              Defensa
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default SortMenu;
