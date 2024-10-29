import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, result] = useResults();
  const [term, setTerm] = useState("");
  
  const filterResultsByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)}/>
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
