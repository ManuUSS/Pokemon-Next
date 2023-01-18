import { Navbar } from "components/ui";
import Head from "next/head";
import { FC } from "react";


type Props = {
    children: JSX.Element,
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <meta name="author" content="Manuel Ulate Sancho"/>
            <meta name="description" content={`Información sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            <title>{ title || 'Pokemon App' }</title>
        </Head>

        <Navbar />

        <main style={{
            padding: '0 20px'
        }}>
            { children }
        </main>

    </>
  )
}
