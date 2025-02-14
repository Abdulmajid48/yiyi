import AntDesign from '@expo/vector-icons/AntDesign'
import Fontisto from '@expo/vector-icons/Fontisto'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
const inputemail = () => {
  return (
    <View className='flex flex-col gap-4 mt-32 mx-auto w-11/12'>
      <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
      <Image source={require("../assets/images/dot.png")} />
      <Text className='text-lg'> We need an email for notifications and a password for login purpose.</Text>
      {/* Email and passsword */}
      <View className='flex flex-col gap-7'>
        <View className='flex flex-col gap-2'>
          <Text>E-mail</Text>
          <TextInput placeholder='alexander@gmail.com' className='border-2 border-[#100D40] rounded-xl pl-2 bg-white h-14'></TextInput>
        </View>
        <View className='flex flex-col gap-2'>
          <View className='flex flex-row justify-between'>
            <Text className='font-bold'>Set a Password</Text>
            <Text className='text-sm'>Min. 8 Characters</Text>
          </View>
          <TextInput placeholder='Enter password' className='border-2 border-[#100D40] rounded-xl pl-2 bg-white h-14'></TextInput>
        </View>
        <View className='flex flex-row items-center gap-2'>
          <Fontisto name="checkbox-passive" size={20} color="#100D40" />
          <Text className=''>
            I agree to the <Text className='text-[#100D40] font-bold'>Terms of service</Text> and <Text className='text-[#100D40] font-bold'>Privacy Policy</Text>
          </Text>
        </View>
        {/* Button */}
        <View className='flex flex-row justify-end items-end mt-6'>
          <Pressable  className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-40 rounded-2xl'>
            <Text className='text-[#F8FCFC] text-xl'>Continue</Text>
            <AntDesign name="arrowright" size={30} color="white" />
          </Pressable>

        </View>
      </View>
    </View>
  )
}
export default inputemail