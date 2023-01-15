import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts/Layout";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";
import FavoritePokemons from '../../components/pokemon/FavoritePokemon';

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémon - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
      <FavoritePokemons favoritePokemons={favoritePokemons}/>
      )}
    </Layout>
  );
};

export default FavoritePage;
