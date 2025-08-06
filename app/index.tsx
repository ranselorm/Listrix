import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Text className="text-2xl text-center mb-4 bg-yellow-400 p-4">
        This is the index page
      </Text>
    </View>
  );
}
