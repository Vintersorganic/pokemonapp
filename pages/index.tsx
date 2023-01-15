import { Text, Card, Grid, Row } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import pokeApi from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { FC } from "react";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: FC<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokémon list">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
}
