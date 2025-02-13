import { View, Text, Image } from 'react-native'
const inputname = () => {
  return (
    <View className='flex flex-col gap-4 mt-32 mx-auto w-11/12'>
          <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
          <Image source={require("../assets/images/dot.png")} />
          <Text>Enter the 4 digit <Text className='font-bold underline'>verification code</Text> sent to your phone.</Text>
          </View>
  )
}
export default inputname