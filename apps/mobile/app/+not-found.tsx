import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "페이지 없음" }} />
      <Text>페이지를 찾을 수 없습니다.</Text>
      <Link href="/">홈으로</Link>
    </View>
  );
}

