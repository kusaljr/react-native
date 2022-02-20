import { Box, Button, Center, Heading, HStack, Input, ScrollView } from "native-base";
import * as  React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ChatBox from "../components/chat-box";
import { SOCKET } from "../config/config";


export default function ChatScreen(){

    const selector = useSelector((state: RootState)=> state.detail)
    const name = selector.name
    const roomId = selector.room_id


    const [messages, setMessages] = React.useState<any>([])
    const [msg, setMsg] = React.useState<any>()
    React.useEffect(() => {
        SOCKET.emit('join', {name: name, room: roomId})
            
    },[]);

    React.useEffect(() => {
        SOCKET.on("message", (message) => {
          setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (msg) {
          SOCKET.emit("sendMessage", msg, () => setMsg(""));
        }
    };
    const scrollViewRef = React.useRef<any>()
    return(
        <Box flex={1} mt={10}>
            <Box >
                <Center><Heading>Welcome to {roomId}</Heading></Center>
            </Box>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                <ChatBox message={messages}/>
            </ScrollView>
            <HStack position={'absolute'}  bottom="0"  >
                    <Input w={'80%'} m={1} value={msg} placeholder="Enter Message" onChangeText={value => setMsg(value)} />
                    <Button onPress={(event: any)=>sendMessage(event)}  >Send</Button>
            </HStack>
        </Box>

    )
}