import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "홈" }} />
      <Tabs.Screen name="search" options={{ title: "상품 검색" }} />
      <Tabs.Screen name="alerts" options={{ title: "가격 알림" }} />
      <Tabs.Screen name="my" options={{ title: "마이페이지" }} />
    </Tabs>
  );
}

