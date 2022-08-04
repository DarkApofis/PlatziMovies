import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons"
import { Button, Container, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useFetchMovieDetailQuery, useFetchRecommendedMoviesQuery } from "../features/apiData/apiData.slice"
const Details = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data, isLoading, isError} = useFetchMovieDetailQuery(id)
    const response = useFetchRecommendedMoviesQuery(id)
    return (
        <Container
            position='relative'
            p={0}
            maxW='375px' 
            width='100%'
            boxShadow='lg'
        >
            <ArrowBackIcon
                position='absolute'
                left='10px'
                top='10px'
                w='38px' 
                h='38px'
                color='white'
                cursor="pointer"
                marginBottom='1rem'
                onClick={() => navigate(-1)}
            />
            <Image
                boxSize='375px'
                height='100%'
                src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            />
            <Container 
                p='2rem 1.5rem'
                w='100%'
                borderTopRadius='50px'
                zIndex='1'
            >
                <Stack direction='row' justify='space-between' marginBottom='1rem'>
                    <Text
                        fontSize='large'
                        fontWeight='bold'
                    >
                        {data?.title}
                    </Text>
                    <Stack direction='row' align='center'>
                        <StarIcon color='#EECC75'/>
                        <Text>{data?.vote_average.toFixed(1)}</Text>
                    </Stack>
                </Stack>
                <Text marginBottom='1rem'>
                    {data?.overview}
                </Text>
                <Flex 
                    direction='row' 
                    wrap='wrap' 
                    justify='space-between' 
                    w='100%'
                >
                    {
                        data?.genres.map(genre => (
                            <Stack
                                key={genre.id}
                                direction='row' 
                                marginBottom='1rem'
                                w='50%'
                                cursor='pointer'
                                onClick={() => navigate(`/category/${genre.id}-${genre.name}`)}
                            >
                                <Button backgroundColor={`primary.${genre.id}`} size='xs'/>
                                <Text fontWeight='semibold'>{genre.name}</Text>
                            </Stack>

                        ))
                    }
                </Flex>
                <Stack>
                    <Text
                        marginBottom='1rem'
                        fontSize='1rem'
                        fontWeight='semibold'
                    >
                        Películas similares
                    </Text>
                </Stack>
                <Stack 
                    direction='row'
                    overflowX='scroll'    
                >
                {
                    response.data?.results?.map(movie => (
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
            </Container>
        </Container>
    )
}

export default Details