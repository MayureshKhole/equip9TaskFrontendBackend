import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { DistanceContext, ImageContext } from "../../contexts/contexts";

const CalculateDistanceTwo = ({ navigation }) => {
  const { distanceSelected, setDistanceSelected } =
    React.useContext(DistanceContext);
  const { imageSelected, setImageSelected } = React.useContext(ImageContext);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [result, setResult] = useState(0);
  const [kms, setKms] = useState(true);
  let lat1 = distanceSelected.latitudefrom;
  let lat2 = distanceSelected.latitudeto;
  let lon1 = distanceSelected.longitudefrom;
  let lon2 = distanceSelected.longitudeto;
  const handleCalculate = () => {
    function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the Earth in kilometers
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in kilometers
      return distance;
    }

    showResult = calculateDistance(lat1, lon1, lat2, lon2);

    setResult(showResult);
    setIsDataSaved(true);
  };

  const handleNext = () => {
    // Redirect to Screen 3 once data is saved

    navigation.navigate("CalculateDistanceOne");
  };
  const handleunitChange = () => {
    setKms(!kms);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>My Uploaded Pic:</Text>
      </View>

      <Image source={{ uri: imageSelected }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`From: (${Number(lat1)},${Number(
          lon1
        )})`}</Text>
        <Text style={styles.text}>{`To: (${Number(lat2)},${Number(
          lon2
        )})`}</Text>

        {isDataSaved && (
          <Text style={styles.text}>{` Answer: ${
            kms ? result.toFixed(2) : (result * 0.621371).toFixed(2)
          } ${!kms ? "Miles" : "Kms"}`}</Text>
        )}
      </View>
      {!isDataSaved && (
        <View style={styles.buttonContainer}>
          <Button title="Calculate" onPress={handleCalculate} />
        </View>
      )}
      {isDataSaved && (
        <View style={styles.buttonContainer}>
          <Button
            title={`${kms ? "in Miles" : "in Kms"}`}
            onPress={handleunitChange}
          />
        </View>
      )}

      {isDataSaved && (
        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={handleNext} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: 16,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default CalculateDistanceTwo;
