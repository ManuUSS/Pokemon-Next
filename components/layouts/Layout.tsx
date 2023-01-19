import { Navbar } from "components/ui";
import Head from "next/head";
import { FC } from "react";


type Props = {
    children: JSX.Element,
    title?: string
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  
    return (
    <>
        <Head>
            <meta name="author" content="Manuel Ulate Sancho"/>
            <meta name="description" content={`Información sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre el pokemon - ${ title }`} />
            <meta property="og:description" content={`Página con información sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
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
