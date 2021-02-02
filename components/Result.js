import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Result({ resultAPI }) {
  if (Object.keys(resultAPI).length === 0) return null;

  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}> {resultAPI.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más alto del día{" "}
        <Text style={styles.span}> Resultado: {resultAPI.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio mas bajo del día{" "}
        <Text style={styles.span}> Resultado: {resultAPI.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variación ultimas 24h{" "}
        <Text style={styles.span}>Resultado: {resultAPI.CHANGEPCT24HOUR}%</Text>
      </Text>
      <Text style={styles.text}>
        Útilima Actualización{" "}
        <Text style={styles.span}> Resultado: {resultAPI.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: "#5E49E2",
    padding: 20,
    marginTop: 20,
  },

  text: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "LatoRegular",
  },

  price: {
    fontSize: 30,
  },

  span: {
    fontFamily: "LatoBlack",
  },
});

export default Result;
