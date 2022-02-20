import { Box, Center, Text, VStack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
    message: string
    from: 'you' | 'user' | 'admin' | 'Admin'
}

export default function ChatBubble({message, from }: Props){
    const selector = useSelector((state: RootState)=> state.detail)
    const name: any = selector.name

    const msgFrom: any = from.toLowerCase()
    
    const isMe = from == name.toLowerCase();

    
    const allignment = isMe ? 'flex-end' : 'flex-start';
    const bottomLeftRadius = isMe ? 32 : 0;
    const bottomRightRadius = isMe ? 0 : 32;

    return(
        <Box>
            {
                msgFrom == 'admin'? 
                <Center m={4}><Text fontSize={'md'}  color="black">{message}</Text></Center>
                :
                <VStack w="full" alignItems={allignment} mb={2}>

                <Box
                bg={!isMe ? 'blue.500' : 'green.500'}
                px={6}
                py={1}
                maxW={80}
                borderTopRadius={32}
                borderBottomLeftRadius={bottomLeftRadius}
                borderBottomRightRadius={bottomRightRadius}
                >
                    <Text color="white" fontWeight="bold" fontSize={'lg'} >{message}</Text>
                </Box>
                <Text color="black" fontSize={'sm'} m={2}>{msgFrom}</Text>
                </VStack>
                
            }


      </Box>
    )
}