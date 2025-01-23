import { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import NameInputComponent from "@/components/name";

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
    <View className="w-11/12 mx-auto flex flex-col gap-5 bg-[#F5F5F5] p-4">
      <NameInputComponent
        inputType="name"
        placeholder="First Name"
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, name: value }))
        }
      />
      <NameInputComponent
        inputType="password"
        placeholder="Password"
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, password: value }))
        }
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 p-3 rounded-xl items-center"
      >
        <Text className="text-white font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
