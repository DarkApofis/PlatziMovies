import { Button, Flex, Spinner, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { useFetchCategoriesQuery } from "../features/apiData/apiData.slice"


const Categorias = () => {
    const {data, isLoading, isError} = useFetchCategoriesQuery()

    const navigate = useNavigate()

    if(isLoading){
        return (
            <Stack maxW='600px' h='300px' align='center' justify='center'>
                <Spinner/>
            </Stack>
        )
    }

    return (
        <Stack>
            <Text
                fontSize='1.3rem'
                fontWeight='medium'
            >
                Categoriás
            </Text>
            <Flex direction='row' wrap='wrap' justify='space-between'>
                {
                    data?.genres.map(genre => (
                        <Stack
                            direction='row' 
                            marginBottom='1rem' 
                            key={genre.id} 
                            w='150px'
                            cursor='pointer'
                            onClick={() => navigate(`/category/${genre.id}-${genre.name}`)}
                        >
                            <Button backgroundColor={`primary.${genre.id}`} size='xs'/>
                            <Text fontWeight='semibold'>{genre.name}</Text>
                        </Stack>
                    ))
                }
            </Flex>
        </Stack>
    )
}

export default Categorias