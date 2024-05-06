import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../constants";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Remote = () => {
  const handlePress = async () => {
    router.replace("/bulb");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-4 my-6 ">
        <View className="flex flex-col items-center align-middle justify-center">
          <TouchableOpacity onPress={handlePress}>
            <Image className="mr-10" source={icons.plus} />
            <Text>Light Buib Remote</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Image className="mr-10" source={icons.plus} />
            <Text>TV Remote</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Image className="mr-10" source={icons.plus} />
            <Text>Phone</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Remote;
