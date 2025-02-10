import { View, Text, Image, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
interface DataTypes {
    country: string;
    flag: string;
}

const Signup = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const router = useRouter();
    const SendOtp = () => {
        if (selectedCountry === "") {
            Alert.alert("Please select a country");
        } else {
            Alert.alert("OTP sent");
            router.push("/otp")
        }
    };

    const data: DataTypes[] = [
        {
            country: "Nigeria",
            flag: "🇳🇬"
        },
        {
            country: "Cameroon",
            flag: "🇨🇲"
        },
        {
            country: "Ghana",
            flag: "🇬🇭"
        },
        {
            country: "Niger",
            flag: "🇳🇪"
        },
        {
            country: "France",
            flag: "🇫🇷"
        },
    ];

    return (
        <View className='bg-[#F5F5F5]'>
            <View className='px-9'>
                <View className='flex flex-col gap-7 mt-32'>
                    <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
                    <Image source={require("../assets/images/dot.png")} />
                    <Text className='text-[#100D40] text-lg'>
                        Enter your <Text className='font-bold underline'>phone number</Text> below.
                    </Text>
                    <Text className='text-[#100D40] text-lg'>
                        We will send a 4 digit verification code to verify your phone number.
                    </Text>
                </View>
                <Text className='mt-5 ml-3 mb-2 text-lg font-bold text-[#100D40]'>Phone Number</Text>
                {/* Country Picker */}
                <View className='h-16 flex flex-row items-center border-2 border-[#344E41] rounded-3xl bg-white'>
                    <View className='w-1/2'>
                        <Picker
                            selectedValue={selectedCountry}
                            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                        >
                            <Picker.Item label="Select a country" value="" />
                            {data.map((item, index) => (
                                <Picker.Item
                                    key={index}
                                    label={`${item.flag} ${item.country}`}
                                    value={item.country}
                                />
                            ))}
                        </Picker>
                    </View>

                    {/* Phone Input */}
                    <View className='w-1/2'>
                        <TextInput
                            placeholder="Enter phone number"
                            className='flex-1 text-sm'
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>
                <View className='flex flex-row justify-end items-end mt-6'>
                    <Pressable onPress={SendOtp} className='flex flex-row gap-4 justify-center items-center bg-[#100D40] h-20 w-40 rounded-2xl'>
                        <Text className='text-[#F8FCFC]'>Send OTP</Text>
                        <AntDesign name="arrowright" size={30} color="white" />
                    </Pressable>

                </View>

            </View>
        </View>
    );
};



export default Signup;