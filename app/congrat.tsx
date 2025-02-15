import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native'
const congrat = () => {
      const router = useRouter();
      const Dashboard = () => {
        return router.push("/dashboard")
      };
    
    return (
        <View className='mt-20 flex flex-col items-center gap-10 mx-5'>
            <Text className='text-9xl'>🎉</Text>
            <Text className='text-[#100D40] text-4xl'>Congratulations!</Text>
            <Text className='text-xl italic text-center text-[#100D40]'>Your account has been  created. We’re happy to have you onboard.</Text>
            {/* Button */}
            <View className='flex flex-row justify-end items-end mt-6'>
                <Pressable onPress={Dashboard} className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-44 rounded-3xl'>
                    <Text className='text-[#F8FCFC] text-xl'>Dashboard</Text>
                    <AntDesign name="arrowright" size={30} color="white" />
                </Pressable>
            </View>
        </View>
    )
}
export default congrat;