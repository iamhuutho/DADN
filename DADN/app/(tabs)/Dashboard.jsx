import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Dashboard = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-4 my-6"></ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
