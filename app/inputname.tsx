import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { View, Text, Image, Alert, TextInput, Pressable } from 'react-native'
const inputname = () => {

    const router = useRouter();
    const InputEmail = () => {
        return router.push("/inputemail")
    };

    return (
        <View className='flex flex-col gap-4 mt-32 mx-auto w-11/12'>
            <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
            <Image source={require("../assets/images/dot.png")} />
            <Text className='text-xl'>Now lets get to know more about you !</Text>
            <View className=''>
                <View className='flex flex-row w-11/12 ' style={{ gap: 16 }}>
                    <View className=''>
                        <Text className='font-bold text-[#100D40]'>First Name</Text>
                        <TextInput placeholder='Alexander' className='h-14 w-52 border-2 rounded-2xl pl-2 bg-white border-[#100D40]' style={{ width: 160 }}></TextInput>
                    </View>
                    <View className=''>
                        <Text className='font-bold text-[#100D40]'>Last Name</Text>
                        <TextInput placeholder='Michael' className='h-14 w-52 border-2 rounded-2xl pl-2 bg-white border-[#100D40]' style={{ width: 160 }} ></TextInput>
                    </View>
                </View>

                <View className='mt-5'>
                    <View className='flex flex-row justify-between'>
                        <Text className=''>Date of Birth</Text>
                        <Text className=''>(DD/MM/YYYY)</Text>
                    </View>
                    <TextInput placeholder='01/08/1990' className='h-14 border-2 rounded-2xl bg-white w-full pl-2' style={{marginRight:400}}></TextInput>
                </View>
            </View>
            <View className='flex flex-row justify-end items-end mt-6'>
                <Pressable onPress={InputEmail} className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-40 rounded-2xl'>
                    <Text className='text-[#F8FCFC] text-xl'>Continue</Text>
                    <AntDesign name="arrowright" size={30} color="white" />
                </Pressable>
            </View>
        </View>
    )
}
export default inputname;