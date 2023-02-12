import { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";

import api from "../services/api";
import { Card } from "../components/Card";

import { List } from "../functions/List";
import { useNavigation } from "@react-navigation/native";

const lista = List(10)

export function Search() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const loadMovies = (title: string) => {
    fetchData(`&s=${title}&page=1`)
  }

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: 'Buscar',
      headerSearchBarOptions: {
        placeholder: "O que você procura?",
        onChangeText: (event) => {
          setTitle(event.nativeEvent.text)
        },
      }
    })
  }, [navigation])

  const fetchData = async (url: string) => {
    try {
      await api
        .get(url)
        .then((response) => setData(response.data.Search))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadMovies(title)
  }, [title])


  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-wrap flex-row items-center justify-center">
          {

            data ? data.map((item, index) => (
              <Card key={index} imdbID={item.imdbID} title={item.Title} poster={item.Poster} />
            )) : ''

          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}