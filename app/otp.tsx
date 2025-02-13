import AntDesign from '@expo/vector-icons/AntDesign'
import { View, Text, TextInput, Pressable, Image } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
const otp = () => {
  return (
    <View className='flex flex-col gap-4 mt-32 mx-auto w-11/12'>
      <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
      <Image source={require("../assets/images/dot.png")} />
      <Text>Enter the 4 digit <Text className='font-bold underline'>verification code</Text> sent to your phone.</Text>
      <View>
        <Text className='mt-5 ml-3 mb-2 text-lg font-bold text-[#100D40]'>Phone Number</Text>
        <View className='flex flex-row h-14 w-11/12 bg-white rounded-xl border border-[#100D40]'>
          <TextInput className='border-r w-1/4'></TextInput>
          <TextInput className='border-r w-1/4'></TextInput>
          <TextInput className='border-r w-1/4'></TextInput>
          <TextInput></TextInput>
        </View>
        <View className='flex flex-row gap-4 justify-between mr-10 mt-4'>
          <Pressable className='flex flex-row gap-2'>
            <AntDesign name="reload1" size={20} color="black" />
            <Text className='text-sm italic text-[#100D40]'>Resend Code </Text>
          </Pressable>
          <Pressable className='flex flex-row gap-2'>
            <EvilIcons name="pencil" size={20} color="black" />
            <Text className='text-sm italic text-[#100D40]'>Change Phone  Number</Text>
          </Pressable>
        </View>
      </View>

      <View className='flex flex-row justify-end items-end mt-6'>
        <Pressable className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-40 rounded-2xl'>
          <Text className='text-[#F8FCFC] text-xl'>Continue</Text>
          <AntDesign name="arrowright" size={30} color="white" />
        </Pressable>

      </View>
    </View>
  )
}
export default otp;