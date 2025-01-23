import React, { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface NameInputComponentProps extends TextInputProps {
  inputType: "name" | "password";
  onValueChange: (value: string) => void;
}

const NameInputComponent: React.FC<NameInputComponentProps> = ({
  inputType,
  placeholder,
  onValueChange,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const renderIcon = () => {
    const iconProps = {
      size: 20,
      color: "#87898E",
      className: "",
    };

    return inputType === "name" ? (
      <Fontisto name="person" {...iconProps} />
    ) : (
      <AntDesign name="lock" {...iconProps} />
    );
  };

  const handleChangeText = (text: string) => {
    setValue(text);
    onValueChange(text);
  };

  const renderPasswordToggle = () => {
    return inputType === "password" ? (
      <TouchableOpacity
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        className=""
      >
        <Ionicons
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={20}
          color="#87898E"
        />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View
      style={[
        {
          borderWidth: 2,
          borderColor: "#DADADA",
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
        },
      ]}
      className="w-11/12 h-14 px-3 flex flex-row items-center rounded-xl"
    >
      {renderIcon()}
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={inputType === "password" && !isPasswordVisible}
        placeholder={placeholder}
        placeholderTextColor="#87898E"
        className="w-full pl-12 pr-12 text-[#87898E]"
        {...rest}
      />
      {renderPasswordToggle()}
    </View>
  );
};

export default NameInputComponent;
