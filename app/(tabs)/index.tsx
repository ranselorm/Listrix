import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
