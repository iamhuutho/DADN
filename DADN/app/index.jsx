import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex h-full px-4">
          <View className="justify-between flex-row">
            <CustomButton
              title="Login"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-20 bg-[#FBC02D]"
            />
            <CustomButton
              title="Signup"
              handlePress={() => router.push("/sign-up")}
              containerStyles="w-20"
            />
          </View>
          <View className="relative mt-40">
            <Text className="text-4xl font-bold text-center">
              <Text className="text-blue-600">Smart home</Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
