import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native'
import { useNavigation } from "@react-navigation/native";

import api from "../services/api";

interface Params {
  imdbId: string;
}

export function Film() {
  const navigation = useNavigation();

  const [data, setData] = useState("")

  const route = useRoute();
  const { imdbId } = route.params as Params;

  useEffect(() => {
    api
      .get(`&i=${imdbId}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: false,
      headerTitle: 'Detalhes',
    })
  }, [navigation])

  return (
    <>
      <View className="px-8">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="items-center mt-12">
            <Image
              className="w-80 h-80 rounded-2xl"
              source={{
                uri: `${data.Poster}`
              }}
            />
            <View className="items-center">
              <Text className="pt-4 text-4xl font-bold">{data.Title}</Text>
              <Text className="text-base"><Text className="font-bold">Ano:</Text> {data.Year}</Text>
            </View>
            <View>
              <Text className="pt-4 text-base"><Text className="font-bold">Resumo:</Text> {data.Plot}</Text>
              <Text className="pt-4 text-base"><Text className="font-bold">Gênero:</Text> {data.Genre}</Text>
              <Text className="pt-4 text-base"><Text className="font-bold">Atores:</Text> {data.Actors}</Text>
              <Text className="pt-4 text-base"><Text className="font-bold">Prêmios:</Text> {data.Awards}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}