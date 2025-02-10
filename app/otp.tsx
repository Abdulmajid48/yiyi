import { View, Text } from 'react-native'
const otp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Text>Enter the 4 digit <Text className='font-bold underline'>verification code</Text> sent to your phone.</Text>
      <View className='w-40 h-20 rounded-xl border'>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  )
}
export default otp