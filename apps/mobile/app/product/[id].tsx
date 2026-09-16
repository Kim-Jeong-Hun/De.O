import { useLocalSearchParams } from "expo-router";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <PlaceholderScreen title={`상품 상세 · ${id}`} />;
}

