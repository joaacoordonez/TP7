import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const imgExterna = {
  uri: "https://estaticos.elcolombiano.com/binrepository/848x565/68c0/780d565/none/11101/UPIA/foto-getty_45248333_20240531183800.jpg",
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  let color = "white";
  const [mensaje, setMensaje] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(color);

  const handlePress = () => {
    setBackgroundColor((prevColor) =>
      prevColor === color ? "lightgrey" : color
    );
  };

  const onPressContactar = () => {
    if (mensaje.trim() === "") {
      alert("Envía un mensaje.");
    } else {
      alert(mensaje);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground
          source={require("./assets/fondo.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <StatusBar style={styles.statusBar} />
          <View style={[styles.card, { backgroundColor: backgroundColor }]}>
            <Image source={imgExterna} style={styles.perfil} />
            <Text style={styles.title}>Juan Fernando Quintero</Text>
            <Text style={styles.subtitle}>Futbolista</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese un nota"
              keyboardType="default"
              value={mensaje}
              onChangeText={(texto) => setMensaje(texto)}
            />
            <TouchableOpacity style={styles.button} onPress={onPressContactar}>
              <Text style={styles.buttonText}>Contactar</Text>
            </TouchableOpacity>
            <Pressable style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}> Cambiar color</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  card: {
    marginTop: 100,
    width: 300,
    height: 500,
    display: "grid",
    placeItems: "center",
    borderRadius: "5%",
  },
  perfil: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: "20%",
    alignContent: "center",
    placeContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    fontWeight: "bold",
    color: "#252850",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    fontWeight: "400",
    color: "#252850",
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#40E0D0",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
