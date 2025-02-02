import { useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <View className="flex flex-col bg-[#F5F5F5]">
      <Image
        source={require("../assets/images/firstimage.png")}
        className="w-full h-[55%]"
        resizeMode="cover"
      />
      <Text className="text-[#100D40] text-4xl font-ibm-regular leading-normal m-auto w-11/12">
        Turn your small savings into something big
      </Text>
      <Text className="text-[#100D40] text-xl leading-snug mt-8 m-auto w-11/12">
        Lets help you save more money by teaching you how to save and helping
        you save.
      </Text>
      <Pressable
        onPress={handleLogin}
        className="mt-4 w-60 h-20 bg-[#100D40] self-end flex flex-row justify-center gap-5 items-center  rounded-3xl mr-5"
      >
        <Text className="text-[#F8FCFC] text-2xl mr-5">Next</Text>
        <AntDesign name="arrowright" size={24} color="#F8FCFC" />
      </Pressable>
    </View>
  );
}
