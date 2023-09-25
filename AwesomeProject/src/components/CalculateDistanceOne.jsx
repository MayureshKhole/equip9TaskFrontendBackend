import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { DistanceContext, ImageContext } from "../../contexts/contexts";

const CalculateDistanceOne = ({ navigation }) => {
  const [latitudefrom, setLatitudefrom] = useState("");
  const [longitudefrom, setLongitudefrom] = useState("");
  const [latitudeto, setLatitudeto] = useState("");
  const [longitudeto, setLongitudeto] = useState("");
  const [isDataSaved, setIsDataSaved] = useState(false);
  const { distanceSelected, setDistanceSelected } =
    React.useContext(DistanceContext);
  const { imageSelected, setImageSelected } = React.useContext(ImageContext);
  const handleSave = () => {
    if (
      latitudefrom.trim() === "" ||
      longitudefrom.trim() === "" ||
      latitudeto.trim() === "" ||
      longitudeto.trim() === ""
    ) {
      Alert.alert("Validation Error", "Latitude and Longitude are required.");
      return;
    }
    let stepObj = {};
    stepObj.latitudefrom = latitudefrom;
    stepObj.longitudefrom = longitudefrom;
    stepObj.latitudeto = latitudeto;
    stepObj.longitudeto = longitudeto;
    setDistanceSelected(stepObj);
    console.log("stepObject", stepObj);

    setIsDataSaved(true);
    console.log("distanceSelected", distanceSelected);
  };

  const handleNext = () => {
    // Redirect to Screen 3 once data is saved
    if (
      latitudefrom.trim() === "" ||
      longitudefrom.trim() === "" ||
      latitudeto.trim() === "" ||
      longitudeto.trim() === ""
    ) {
      Alert.alert("Validation Error", "Latitude and Longitude are required.");
      return;
    }
    navigation.navigate("CalculateDistanceTwo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Uploaded Pic:</Text>
      {imageSelected && (
        <Image source={{ uri: imageSelected }} style={styles.image} />
      )}

      <Text style={styles.label}>Enter from coordinates:</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Latitude from"
          onChangeText={(text) => setLatitudefrom(text)}
          value={latitudefrom}
        />

        <TextInput
          style={styles.input}
          placeholder="Longitude from"
          onChangeText={(text) => setLongitudefrom(text)}
          value={longitudefrom}
        />
      </View>

      <Text style={styles.label}>Enter to coordinates:</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Latitude to"
          onChangeText={(text) => setLatitudeto(text)}
          value={latitudeto}
        />
        <TextInput
          style={styles.input}
          placeholder="Longitude to"
          onChangeText={(text) => setLongitudeto(text)}
          value={longitudeto}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>

      {isDataSaved && (
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleNext} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default CalculateDistanceOne;
