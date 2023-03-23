"use client"
import React from 'react'
import { Heading, Box, Text} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box textAlign={{base: "left", md:"left", lg:"center"}} pl="15px" bg="#6B46C1" pt="90px" pb="250px" color="white">
        <Heading  fontSize="50px">Simple Pricing for your Business</Heading>
        <Text pt="10px" fontSize={"20px"}>Plans that are carefully crafted to suit your Business</Text>
    </Box>
  )
}
