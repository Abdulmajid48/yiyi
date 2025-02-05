import React, { type FC, useState } from "react";
import { View, Text, Alert, Pressable } from "react-native";
import NameInputComponent from "@/components/nameinputcomponent";
import { Image } from "react-native";
import { useRouter } from "expo-router";
const LoginScreen: FC = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [isChecked, setChecked] = useState<boolean>(false)
  const RememberMe = () => {
    return setChecked((prev) => (!prev))
  }
  const handleLogin = () => {
    if (!formData.name || !formData.password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    // Implement login logic
    console.log("Login attempt", { formData });
    Alert.alert("Success", `Welcome, ${formData.name}!`);
    router.push("/signin");
  };


  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <View className="w-full mx-auto my-auto flex flex-col gap-9 bg-[#F5F5F5] p-4 ">
      <View className="flex flex-col gap-4">
        <NameInputComponent
          inputType="name"
          placeholder="First Name"
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, name: value }))
          }
        />
        <NameInputComponent
          inputType="password"
          placeholder="Enter your password"
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, password: value }))
          }
        />
      </View>
      {/* Remember me and forget password */}
      <View className="flex flex-row justify-between items-center">
        <View className="ml-3 flex flex-row justify-between items-center gap-2">
          <Pressable onPress={RememberMe} className={` ${isChecked ? "bg-[#100D40]" : ""} w-5 h-5 rounded-md border-[#87898E] border hover:cursor-pointer`}></Pressable>
          <Text className="text-[#87898E]">Remember me</Text>
        </View>
        <Text className="text-[#100D40]">Forget your password?</Text>
      </View>
      <View className="flex flex-col gap-4">
        {/* Sign In */}
        <Pressable
          onPress={handleLogin}
          className="bg-[#100D40] p-3 h-14 flex justify-center rounded-3xl items-center"
        >
          <Text className="text-white font-bold">Sign In</Text>
        </Pressable>
        {/* Sign Up */}
        <Pressable
          onPress={handleSignup}
          className=" border border-[#100D40] p-3 h-14 flex justify-center rounded-3xl items-center"
        >
          <Text className="text-[#100D40] font-bold">Sign Up</Text>
        </Pressable>
      </View>

      <Image source={require("../assets/images/facial.png")}
        className="flex justify-center items-center mx-auto"></Image>
    </View>
  );
};

export default LoginScreen;
