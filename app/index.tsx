import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Link href="/(tabs)" className="text-blue-500">
        <Text className="text-2xl text-center mb-4 bg-yellow-400 p-4">
          This is the index page
        </Text>
      </Link>
    </View>
  );
}
