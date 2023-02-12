import { Text, View } from "react-native";

interface TextProps {
  title: string;
}

export function Header(props: TextProps) {
  return (
    <View className="py-3">
      <Text className="text-2xl font-bold">{props.title}</Text>
    </View>
  )
}