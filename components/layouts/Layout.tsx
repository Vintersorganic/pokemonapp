import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";
import { useRouter } from "next/router";
interface Props {
  children?: React.ReactNode;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Jorge Gorostegui" />
        <meta name="description" content={`Information about Pokémon ${title}`} />
        <meta name="keywords" content="XXX, pokémon, pokedex" />
        <meta
          property="og:title"
          content={`Information about Pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Information about ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
