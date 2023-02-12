import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import api from "../services/api";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import { List } from "../functions/List";

const lista = List(10)

export function Search() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([{}]);

  useEffect(() => {
    api
      .get(`&s=Titanic&page=1`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  return (
    <>
      <View className="flex-1 bg-zinc-800 px-8 pt-16">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Header title="Buscar" />
          <View className="flex-1 flex-row justify-center items-center bg-zinc-100 rounded-lg">
            <Feather
              name="search"
              size={25}
            />
            <TextInput
              placeholder="O que você procura?"
              placeholderTextColor="black"
              className="rounded-4 p-2 bg-zinc-100 rounded-lg w-[90%] h-12"
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <Text className="font-bold text-lg mt-4">Exemplos de filmes</Text>
          <View className="flex flex-wrap flex-row">
            {
              data.Response === "True" ?
                lista.map((item, index) => (
                  <Card key={index} poster={data.Search[index].Poster} imdbId={data.Search[index].imdbID} />
                )) : <Text className="text-white font-bold text-xl">Nenhum filme encontrado</Text>
            }
          </View>
        </ScrollView>
      </View>
    </>
  )
}