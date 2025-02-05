import { View, Text, Image, TextInput } from 'react-native'
const signup = () => {
    return (
        <View className='flex flex-col gap-7 bg-[#F5F5F5] px-9 mt-32'>
            <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
            <Image source={require("../assets/images/dot.png")} />
            <Text className='text-[#100D40] text-lg'>Enter your <Text className='font-bold underline'>phone number</Text> below.</Text>
            <Text className='text-[#100D40] text-lg'>We will send a 4 digit verification code to verify your phone number.</Text>
            <View className='px-2 flex flex-row items-center h-20 w-full border-2 border-[#344E41] rounded-3xl'>
                <Text>fhsfb</Text>
                <TextInput className='w-5/6' />
            </View>

        </View>
    )
}
export default signup