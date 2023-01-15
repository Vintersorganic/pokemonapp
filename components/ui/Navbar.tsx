import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React, { FC } from "react";
import NextLink from "next/link";

export interface Props {}

export const Navbar: FC<Props> = (props) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt={"App icon"}
        width={60}
        height={60}
      />
      <NextLink legacyBehavior href={"/"} passHref>
        <Link>
          <Text color="white" h3>
            P
          </Text>
          <Text color="white" h4>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer style={{ flex: 1 }} />

      <NextLink legacyBehavior href={"/favorites"} passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
