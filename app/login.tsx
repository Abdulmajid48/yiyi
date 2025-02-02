import { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import NameInputComponent from "@/components/name";
import { Image } from "react-native";
const LoginScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleLogin = () => {
    if (!formData.name || !formData.password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    // Implement login logic
    console.log("Login attempt", { formData });
    Alert.alert("Success", `Welcome, ${formData.name}!`);
  };

  return (
    <View className="w-full mx-auto my-auto flex flex-col gap-5 bg-[#F5F5F5] p-4 ">
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
      <View className="flex justify-between items-center">
        <Text></Text>
        <Text></Text>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-[#100D40] p-3 h-14 flex justify-center rounded-3xl items-center"
      >
        <Text className="text-white font-bold">Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogin}
        className=" border border-[#100D40] p-3 h-14 flex justify-center rounded-3xl items-center"
      >
        <Text className="text-[#100D40] font-bold">Sign Up</Text>
      </TouchableOpacity>
      <Image source={require("../assets/images/facial.png")}
      className="flex justify-center items-center mx-auto"></Image>
    </View>
  );
};

export default LoginScreen;
