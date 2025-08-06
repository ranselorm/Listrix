import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-xl font-bold mt-20 bg-blue-400 rounded-full">
        Edit app/index.tsx to edit.
      </Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Text className="text-3xl">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
