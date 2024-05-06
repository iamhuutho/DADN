import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
const Bulb = () => {
  return (
    <>
      <SafeAreaView className="bg-white h-full">
        <ScrollView className="px-4 my-6">
          <View>
            <Text>HELLO ABC</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default Bulb;
