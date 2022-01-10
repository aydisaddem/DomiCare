import React from "react"
import { Button , Radio, Center, NativeBaseProvider } from "native-base"
import { useNavigation } from "@react-navigation/native";

export default () => {
    const [value, setValue] = React.useState("user type")
    const navigation = useNavigation()

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="user type"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
    >
   
      <Radio value='SignUpServiceSeeker'  size="lg" my={1}>
      Service seeker
      </Radio>
      <Radio value='SignUpServiceProvider'  size="lg" my={1}>
      Service provider
      </Radio>
      <Radio value='SignUpEquipementsProvider'  size="lg" my={1}>
      Equipements provider
      </Radio>
    </Radio.Group>
    <Button onPress={()=>navigation.navigate(`${value}`)}>Next</Button>
      </Center>
    </NativeBaseProvider>
  )
}
