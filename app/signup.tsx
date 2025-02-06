import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

interface DataTypes {
    country: string;
    flag: string;
}

const Signup = () => {
    const [selectedCountry, setSelectedCountry] = useState("");

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
            <View className='flex flex-col gap-7 px-9 mt-32'>
                <Text className='text-[#100D40] text-4xl font-bold'>Sign Up</Text>
                <Image source={require("../assets/images/dot.png")} />
                <Text className='text-[#100D40] text-lg'>
                    Enter your <Text className='font-bold underline'>phone number</Text> below.
                </Text>
                <Text className='text-[#100D40] text-lg'>
                    We will send a 4 digit verification code to verify your phone number.
                </Text>

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


            </View>
        </View>
    );
};



export default Signup;