import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { VStack, Text, Box, Center, FormControl, Input, Button } from 'native-base'
import React from 'react'
import { useDispatch } from 'react-redux';
import { SOCKET } from '../config/config';
import { setName, setRoomId } from '../redux/slices/detailSlice';


export type RootStackParamList = {
    Main: undefined;
    Auth: undefined;
};

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

  
 export default function LoginScreen() {
    const initialState = {
        name: ""
    }
    const [formData, setData] = React.useState({"name": "", "room": ""});
    const [errors, setErrors] = React.useState(initialState);
    const navigation = useNavigation<authScreenProp>();

    const validate = () => {
      if (formData.name === "") {
        setErrors({ ...errors,
          name: 'Name is required'
        });
        return false;
      } else if (formData.name.length < 3) {
        setErrors({ ...errors,
          name: 'Name is too short'
        });
        return false;
      }
      setErrors(initialState)
      return true;
    };

    const dispatch = useDispatch()
  
    const onSubmit = () => {
      if(validate()){
        dispatch(setName(formData.name));
        dispatch(setRoomId(formData.room))
        navigation.navigate('Main')
      }
    };

    return <Center>

        <Box mt={20} alignItems="center">
        <Text fontWeight={'bold'} fontSize={'5xl'} fontStyle="italic">
            Chat App
        </Text>
        <Text mt={4} fontWeight={'medium'} fontSize={'xl'} fontStyle="italic">
            Register
        </Text>
        </Box>
        <VStack width="90%" mx="3" maxW="300px" mt={10}>
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label _text={{
          bold: true
        }}>Name</FormControl.Label>
          <Input placeholder="John" onChangeText={value => setData({ ...formData,
          name: value
        })} />
          {errors.name != "" ? <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>
        <FormControl.Label mt={5} _text={{
            bold: true
        }}>
            Room Id
        </FormControl.Label>
        <Input placeholder='Enter Room Id' onChangeText={value=> setData({...formData, room: value})}/>
        
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>
      </VStack>;
      </Center>;
  }