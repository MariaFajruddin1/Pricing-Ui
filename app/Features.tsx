"use client"
import React from 'react'
import { Heading, Box, Text, Flex, Button, HStack, Icon } from '@chakra-ui/react'
import icon01 from './Icons/Icon01'
import Icon02 from './Icons/Icon02'
import Icon03 from './Icons/Icon03'

export default function Features() {
    return (
        <Box width={"800px"} m="auto" mt="40px" px="50px">
            <Flex direction={{base:"column",lg:"row"}}>
                <HStack mb="20px">
                    <Icon as={icon01} />
                    <Text fontWeight="bold">30 days money back Guarantee</Text>
                </HStack>

                <HStack mb="20px">
                    <Icon as={Icon02} />
                    <Text fontWeight="bold">No setup fees 100% hassle-free</Text>
                </HStack>

                <HStack mb="20px">
                    <Icon as={Icon03} />
                    <Text fontWeight="bold">No monthly subscription Pay once and for all</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
