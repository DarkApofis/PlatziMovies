import {Spinner, Stack } from "@chakra-ui/react"

const LoadingSpinner = () => {
    return (
        <Stack 
            p='2.2rem 1.5rem' 
            minW='375px' 
            maxW='600px' 
            width='100%'
            h='100vh'
            m='0 auto'
            align='center'
            justify='center'
        >
            <Spinner size='xl' />
        </Stack>
    )
}

export default LoadingSpinner
