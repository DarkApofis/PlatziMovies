import { Heading, IconButton, Input, InputGroup, InputRightElement, Stack} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Header = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  function handleSearch(){
    if(search.length >= 1){
      navigate(`/search?movie_name=${search}`)
    }
  }

  return (
    <Stack marginBottom='45px'>
        <Heading fontSize='3xl'>PlatziMovies</Heading>
        <InputGroup maxW='600px'>
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
    </Stack>
  )
}

export default Header