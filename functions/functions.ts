import type { Pokemon } from "../interfaces/interfaces";

export function OrdenarPokemones(
  pokemones: Pokemon[],
  orden: string,
  atributo: string
) {
  
  const pokemones_ordenados = [...pokemones];

  // creo un tipo de dato para ordenar por nombre, ataque, defensa o salud especificamente
  type atributoKey = keyof typeof pokemones[0][ "nombre" | "ataque" | "defensa" | "salud"];
  const type_atributo = atributo as atributoKey;
    
    if (orden === "des") {
      pokemones_ordenados.sort((a, b) => {
        if (a[type_atributo] < b[type_atributo]) {
          return 1;
        }
        if (a[type_atributo] > b[type_atributo]) {
          return -1;
        }
        return 0;
      });
    }
    
    if (orden === "asc") {
      pokemones_ordenados.sort((a, b) => {
        if (a[type_atributo] > b[type_atributo]) {
          return 1;
        }
        if (a[type_atributo] < b[type_atributo]) {
          return -1;
        }
        return 0;
      });
    }
    
    return pokemones_ordenados;


  }
  