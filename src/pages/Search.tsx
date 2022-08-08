import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons"
import { Container, Flex, IconButton, Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import LoadingSpinner from "../components/Spinner"
import { useFetchSearchMovieQuery } from "../features/apiData/apiData.slice"

const Search = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    
    const movieName = searchParams.get('movie_name') || ""

    const {data, isLoading, isError} = useFetchSearchMovieQuery(movieName)

    function handleSearch(){
      if(search.length >= 1){
        navigate(`/search?movie_name=${search}`)
      }
    }

    if(isLoading){
        return <LoadingSpinner/>
    }

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
            <InputGroup maxW='300px' marginBottom='1rem'>
                <Input placeholder="Vengadores" onChange={(e) => setSearch(e.target.value)}/>
                <InputRightElement
                    p={0}
                    children={
                    <IconButton
                        aria-label='Search database' 
                        colorScheme='purple' 
                        borderLeftRadius={0}
                        icon={<SearchIcon />}
                        onClick={handleSearch}
                    />
                    }
                />
            </InputGroup>
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
        </Container>
    )
}

export default Search