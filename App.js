import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

const logo = require("./assets/img/cryptomonedas.png");
import { useFonts } from "expo-font";
import axios from "axios";

export default function App() {
  const [coinValue, setCoinValue] = useState("");
  const [criptoValue, setCriptoValue] = useState("");
  const [requestAPI, setRequestAPI] = useState(false);
  const [resultAPI, setResultAPI] = useState({});
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const request = async () => {
      if (requestAPI) {
        setLoading(true);
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoValue}&tsyms=${coinValue}`;
        const result = await axios.get(URL);
        setResultAPI(result.data.DISPLAY[criptoValue][coinValue]);
        setRequestAPI(false);
        setLoading(false);
      }
    };
    request();
  }, [requestAPI]);

  const [loaded] = useFonts({
    LatoBlack: require("./assets/fonts/Lato-Black.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ScrollView>
        <Header />
        <Image style={styles.image} source={logo} />
        <View style={styles.container}>
          <Form
            coinValue={coinValue}
            criptoValue={criptoValue}
            setCoinValue={setCoinValue}
            setCriptoValue={setCriptoValue}
            setRequestAPI={setRequestAPI}
          />

          <View>
            {loading ? (
              <ActivityIndicator
                style={{ marginTop: 20 }}
                color="#5E49E2"
                size="large"
              />
            ) : (
              <Result resultAPI={resultAPI} />
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  container: {
    marginHorizontal: "2.5%",
  },
});
