import { useNavigate } from "react-router-dom"

import { useFetchTrendMoviesQuery } from "../features/apiData/apiData.slice"
import { Button, Image, Stack, Text } from "@chakra-ui/react"

const Tendencias = () => {

    const {data, isLoading, isError} = useFetchTrendMoviesQuery()

    const navigate = useNavigate()
    return (
        <Stack marginBottom='45px'>
            <Stack 
                direction='row' 
                justify='space-between'
                align='center'
                marginBottom='29px'
            >
                <Text 
                    fontSize='1.3rem'
                    fontWeight='medium'
                >
                    Tendencias
                </Text>
                <Button 
                    w='73px' 
                    colorScheme='purple'
                    color='white'
                    fontSize='0.9rem'
                    onClick={() => navigate('/trends')}
                >
                    Ver más
                </Button>
            </Stack>
            <Stack 
                direction='row'
                overflowX='scroll'    
            >
                {
                    data?.results.map(movie => (
                        <Image
                            key={movie.id}
                            borderRadius='5px'
                            w='150px'
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                            cursor='pointer'
                            onClick={() => navigate(`/movie/${movie.id}`)}
                        />
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Tendencias