import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View>
      <Text style={styles.header}> Criptomonedas </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    fontFamily: "LatoBlack",
    backgroundColor: "#5E49E2",
    paddingBottom: 30,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
  },
});
export default Header;
