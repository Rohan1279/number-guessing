import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 24,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#ddb52f",
    fontSize: 36,
    fontWeight: "bold",
  },
});
