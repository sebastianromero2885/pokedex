import type { Pokemon } from "../../interfaces/interfaces";

export async function getPokemon() {

  let pokemones: Array<Pokemon> = [];
  
  let traduccion: any = {
    normal: "normal",
    fighting: "lucha",
    flying: "volador",
    poison: "veneno",
    ground: "tierra",
    rock: "roca",
    bug: "insecto",
    ghost: "fantasma",
    steel: "acero",
    fire: "fuego",
    water: "agua",
    grass: "planta",
    electric: "eléctrico",
    psychic: "psíquico",
    ice: "hielo",
    dragon: "dragón",
    dark: "siniestro",
    fairy: "hada",
    unknown: "desconocido",
    shadow: "sombra",
  };

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
  );
  if (response.ok) {
    const data = await response.json();
    await Promise.all(
      data.results.map(async (pokemon: any) => {
        const status_pokemon = await fetch(pokemon.url);
        const json_pokemon = await status_pokemon.json();
        return json_pokemon;
      })
    )
      .then((response) => {
        let datos_pokemon: Pokemon;

        response.forEach((pokemon: any) => {
          datos_pokemon = {
            id: pokemon.id,
            nombre: pokemon.name.toUpperCase(),
            tipo_pokemon:
              Object.keys(traduccion).includes(pokemon.types[0].type.name) ===
              true
                ? traduccion[pokemon.types[0].type.name]
                : "???",
            imagen: pokemon.sprites.other.home.front_default,
            ataque: pokemon.stats[1].base_stat,
            salud: pokemon.stats[0].base_stat,
            defensa: pokemon.stats[2].base_stat,
          };

          pokemones.push(datos_pokemon);

        });

        return pokemones;
      })
      .catch((err) => {
        console.log(err);
        //Devuelvo el objeto vacio para mostrar un error en el componente
        return pokemones;
      });
  }
  //Si la respuesta no es ok, devuelvo el objeto vacio para mostrar un error en el componente
  return pokemones;
}
