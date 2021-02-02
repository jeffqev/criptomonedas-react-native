import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
function Form({
  coinValue,
  criptoValue,
  setCoinValue,
  setCriptoValue,
  setRequestAPI,
}) {
  const [criptos, setCriptos] = useState([]);

  useEffect(() => {
    const getDataAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setCriptos(result.data.Data);
    };

    getDataAPI();
  }, []);

  const handleCoin = (pickercoin) => {
    setCoinValue(pickercoin);
  };

  const handleCripto = (pickercripto) => {
    setCriptoValue(pickercripto);
  };

  const handleCotizar = () => {
    if (coinValue.trim() === "" || criptoValue.trim() === "") {
      showAlert();
      return;
    }

    setRequestAPI(true);
  };

  const showAlert = () => {
    Alert.alert("Error", "Campos obligatorios", [{ text: "OK" }]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={coinValue}
        onValueChange={(pickercoin) => handleCoin(pickercoin)}
      >
        <Picker.Item label="-- Seleccionar una moneda --" value="" />
        <Picker.Item label="Dolar americano" value="USD" />
        <Picker.Item label="Peso mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={criptoValue}
        onValueChange={(pickercripto) => handleCripto(pickercripto)}
      >
        <Picker.Item label="-- Seleccionar una moneda --" value="" />
        {criptos.map((cripto) => (
          <Picker.Item
            label={cripto?.CoinInfo.FullName}
            value={cripto?.CoinInfo.Name}
            key={cripto?.CoinInfo.Id}
          />
        ))}
      </Picker>

      <View>
        <TouchableHighlight style={styles.btn} onPress={() => handleCotizar()}>
          <Text style={styles.btnText}> Cotizar </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "LatoBlack",
    fontSize: 20,
    textTransform: "uppercase",
    marginVertical: 20,
  },
  btn: {
    backgroundColor: "#5E49E2",
    padding: 15,
    marginTop: 20,
  },
  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "LatoBlack",
  },
});

export default Form;
