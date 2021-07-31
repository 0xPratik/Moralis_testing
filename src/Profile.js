import { Box,Heading,Text,Image,Input } from "@chakra-ui/react"
import { useMoralis } from "react-moralis";

export default function Profile() {
    const {Moralis,user} = useMoralis();
    return (
        <Box>
            <Heading>Tweet Something</Heading>
        </Box>
    )
}
