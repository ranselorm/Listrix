import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
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
