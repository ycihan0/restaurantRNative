import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, result, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {result.length == 0 ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
