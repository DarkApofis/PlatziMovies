import { Container } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
const DetailMovie = () => {
    const {name} = useParams()
    return (
        <Container
            minW='375px' 
            maxW='1000px' 
            width='100%'
        >
            {name}
        </Container>
    )
}

export default DetailMovie