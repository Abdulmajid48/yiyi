import AntDesign from '@expo/vector-icons/AntDesign'
import { View, Text, TextInput, Pressable } from 'react-native'
const otp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Text>Enter the 4 digit <Text className='font-bold underline'>verification code</Text> sent to your phone.</Text>
      <Text className='mt-5 ml-3 mb-2 text-lg font-bold text-[#100D40]'>Phone Number</Text>
      <View className='w-40 h-20 rounded-xl border'>
        <TextInput className='border-r'></TextInput>
        <TextInput className='border-r'></TextInput>
        <TextInput className='border-r'></TextInput>
        <TextInput></TextInput>
      </View>
      <View className='flex flex-row justify-end items-end mt-6'>
        <Pressable onPress={ } className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-40 rounded-2xl'>
          <Text className='text-[#F8FCFC]'>Send OTP</Text>
          <AntDesign name="arrowright" size={30} color="white" />
        </Pressable>

      </View>
    </View>
  )
}
export default otp