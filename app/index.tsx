import Test from "@/components/Test";
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
      <Text className="text-2xl text-center mb-4 bg-yellow-400">
        Edit app/index.tsx to edit.
      </Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)")}>
        <Text className="mt-20">Go to Home</Text>
      </TouchableOpacity>
      <Test />
    </View>
  );
}
