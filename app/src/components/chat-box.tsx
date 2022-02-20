import { Flex } from "native-base";
import React from "react";
import ChatBubble from "./chat-bubble";

export default function ChatBox({message}: any){
    return(
        
        <Flex
            flex={1}
            flexDirection="column"
            w={'full'}
            px={4}
            mt={4}
        >
            {message.map((m: any, i: number) => (
                <ChatBubble key={i} message={m.text} from = {m.user} />
            ))}
        </Flex>
    )
}