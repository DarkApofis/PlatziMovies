import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"

import { useFetchTrendMoviesQuery } from "../features/apiData/apiData.slice"
const Trends = () => {

    const {data, isLoading, isError} = useFetchTrendMoviesQuery()
    
    const navigate = useNavigate()
    

    return (
        <Container
            p='2.2rem 1.5rem' 
            minW='375px' 
            maxW='600px' 
            width='100%'
        > 
            <ArrowBackIcon 
                w='38px' 
                h='38px'
                color='#805ad5'
                cursor="pointer"
                marginBottom='1rem'
                onClick={() => navigate(-1)}
            />
            <Stack>
                <Text
                    marginBottom='1rem'
                    fontSize='2xl'
                    fontWeight='medium'
                >
                    Tendencias
                </Text>
                <Flex direction='row' wrap='wrap' gap='2'>
                    {
                        data?.results.map(movie => (
                            <Image
                                key={movie.id}
                                borderRadius='5px'
                                maxW='155px'
                                w='100%'
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title}
                                cursor='pointer'
                                onClick={() => navigate(`/movie/${movie.id}`)}
                            />
                        ))
                    }
                </Flex>
            </Stack>
        </Container>
    )
}
export default Trends