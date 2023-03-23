"use client"
import React from 'react'
import { Heading, Box, Text, Flex, Button, HStack, Icon } from '@chakra-ui/react'
import checkMackIcons from './Icons/checkMackIcons'

export default function Pricing() {
    return (
        <Box maxW="950px"
            mx={{base:"20px",lg:"auto"}}
            mt="-150px"
            bg="white"
            borderRadius={"16px"}
            overflow="hidden"
            boxShadow={" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}>
            <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                <Box bg="#eae3f9" p="40px" textAlign={"center"}>
                    <Text fontSize="24px" fontWeight="bold">Premium PRO</Text>
                    <Heading fontSize="60px">$329</Heading>
                    <Text>billed just once</Text>
                    <Button bg="#805AD5" color="white" w="300px" mt="20px">Get Started</Button>
                </Box>
                
                <Box pt="50px" pl="25px" pr="35px">
                    <Text mb="10px">Access these features when you get this pricing package for your business.</Text>
                    <HStack mb="15px">
                        <Icon as={checkMackIcons} />
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Icon as={checkMackIcons} />
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Icon as={checkMackIcons} />
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Icon as={checkMackIcons} />
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>

            </Flex>
        </Box>
    )
}
