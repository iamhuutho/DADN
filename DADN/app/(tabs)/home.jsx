import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { icons } from "../../constants"; // Assuming icons are imported correctly
import { useNavigation } from "@react-navigation/native"; // Assuming proper navigation setup
import { router } from "expo-router";
const Home = () => {
  // Using PascalCase for component names
  const navigation = useNavigation(); // Destructure for cleaner code

  const handleLogout = async () => {
    router.replace("/sign-in");
  };

  return (
    <ScrollView className="px-4 my-6 flex flex-col">
      <View className="flex flex-row items-center justify-center">
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Image className="mr-10" source={icons.plus} />
          <Text>Light Bulb Remote</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Image
          className="mr-10"
          tintColor={"rgb(37 99 235)"}
          source={icons.logout}
        />
        <Text>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
