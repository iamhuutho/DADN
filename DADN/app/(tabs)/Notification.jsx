import { useState } from "react";
import { router } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";



const Notification = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-4 my-6">
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
