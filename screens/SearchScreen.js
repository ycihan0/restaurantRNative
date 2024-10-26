import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, result] = useResults();
  
  const filterResultsByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Ucuz Restorantlar"
        results={filterResultsByPrice("₺")}
      />
      <ResultsList
        title="Uygun Restorantlar"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="Pahalı Restorantlar"
        results={filterResultsByPrice("₺₺₺")}
      />
      <ResultsList
        title="Lüx Restorantlar"
        results={filterResultsByPrice("₺₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
