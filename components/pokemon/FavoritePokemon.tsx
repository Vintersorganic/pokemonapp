import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  favoritePokemons: number[];
}

const FavoriteCardPokemon = ({ id }: { id: number }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`)
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};

const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon id={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
