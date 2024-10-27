import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultDetails from "./ResultDetails";

export default function ResultsList({ title, results }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
