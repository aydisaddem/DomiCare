import * as React from "react";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"


function ResetPassword (){
    const navigation = useNavigation()
    const [formData, setData] = React.useState({});
    const [errors,  setErrors] = React.useState({});
 

    const validate =() =>{
      let validation = true;
      let errors = {};
      if (formData.email === undefined) {
        errors.email = "email is required";
        validation = false;
    }
    setErrors(errors);
    return validation;
    };
    
    const post = () =>{
      axios.post('http://localhost:3000/auth/ResetPassword',{formData} ).then((response)=>{
        let errors={}
        const data = response.data
        if(response.data === "Email address doesn't exist"){
            errors["email"]= "Email address doesn't exist !";
            setErrors(errors);
        }
        else {
       console.log('email sent')
        } 
         }).catch((err)=>{
        console.log(err)
         })
    };
    
    const onSubmit =()=>{
      validate()
      ?(
        post()
      )
      : console.log("Validation Failed");
    };
    
        return (
            <NativeBaseProvider>
              <Center flex={1} px="3">
              <Box safeArea p="2" py="8" w="120%" maxW="300">
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
              >
                Password Reset
              </Heading>
              
        
              <VStack space={3} mt="5">
                <FormControl isRequired isInvalid={"email" in errors }>
                <FormControl.Label>Email</FormControl.Label>
                  <Input    onChangeText={(value) =>
                                    setData({ ...formData, email: value })
                                }/>
                                {"email" in errors ? (
                        <FormControl.ErrorMessage>
                            {errors.email}
                        </FormControl.ErrorMessage>
                    ) : (
                        ""
                    )}
                </FormControl>

                <Button mt="2" colorScheme="cyan" onPress={onSubmit}>
                  Reset my Password
                </Button>
               
              </VStack>
            </Box>
              </Center>
            </NativeBaseProvider>
          )
}

export default function () {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <ResetPassword/>
            </Center>
        </NativeBaseProvider>
    );
}