import { ArrowBackIcon } from "@chakra-ui/icons"
import { Button, Container, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"

import { useFetchMovieByCategoryQuery } from "../features/apiData/apiData.slice"

const Category = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const idNumber = id?.split("-")[0]
    const nameGenrer = id?.split("-")[1]

    function goBack(){
        navigate(-1)
    }

    const {data, isLoading, isError} = useFetchMovieByCategoryQuery(idNumber)
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
            onClick={goBack}
        />
        <Stack>
            <Stack direction='row' align='center'>
                <Button backgroundColor={`primary.${idNumber}`} size='sm'/>
                <Text
                    marginBottom='1rem'
                    fontSize='2xl'
                    fontWeight='medium'
                >
                    {nameGenrer}
                </Text>
            </Stack>
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

export default Category