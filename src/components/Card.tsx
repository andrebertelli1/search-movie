import { Image, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

interface CardProps {
  imdbID: string;
  title: string;
  poster: string;
}

export function Card(props: CardProps) {
  const { navigate } = useNavigation();
  return (
    <>
      <TouchableOpacity 
        className=" w-full h-20 flex-row items-center"
        onPress={() => navigate('film', { imdbId: props.imdbID })}
        >
        <Image
          className="w-16 h-16 rounded-2xl"
          source={{
            uri: `${props.poster}`
          }}
        />
        <Text className="pl-2 text-base">{props.title}</Text>
      </TouchableOpacity>
    </>
  )
}