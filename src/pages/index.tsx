import { FC } from "react"
import { GetStaticProps } from "next";
import { Layout } from "components/layouts";
import { pokeApi } from "api";



const HomePage: FC = ( props ) => {
  return (
    <Layout
      title="Listado de pokemons"
    >
      <h1>Hola Mundo</h1>      
    </Layout>
  )
}



//Solo se ejecuta del lado del Server
//Solo se puede usar desde las páginas
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
