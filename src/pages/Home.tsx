import { Box, Container } from '@chakra-ui/react'
import Categorias from '../components/Categorias'
import Header from '../components/Header'
import Tendencias from '../components/Tendencias'

function Home() {

  return (
    <Container 
      p='2.2rem 1.5rem' 
      minW='375px' 
      maxW='600px' 
      width='100%'
      boxShadow='2xl'
    >
      <Header/>
      <Tendencias/>
      <Categorias/>
    </Container>
  )
}

export default Home