import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadFile } from "./service/api";
import * as FileSystem from "expo-file-system";
import { ImageContext } from "../../contexts/contexts";

const UploadProfilePic = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState();
  const { imageSelected, setImageSelected } = React.useContext(ImageContext);
  const [result, setResult] = useState();
  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square aspect ratio
      quality: 1,
    });

    if (!image.cancelled) {
      setSelectedImage(image.assets[0].uri);
    }
    setResult(image);
    setImageSelected(true);
  };

  const handleNext = async () => {
    if (result) {
      const data = new FormData();
      data.append("name", "1.png");
      data.append("file", {
        uri: result.assets[0].uri,
        type: "image/jpeg",
        name: "photo.jpg",
      });

      const response = await uploadFile(data);
      setImageSelected(response);
      setResponse(response);
      navigation.navigate("CalculateDistanceOne");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {!selectedImage ? (
          <Text style={styles.title}>Select a profile picture: </Text>
        ) : (
          <Text style={styles.title}>Image Selected </Text>
        )}
      </TouchableOpacity>
      <Button title="Pick an image" onPress={pickImage} />

      {selectedImage && (
        <Button title="Next" onPress={handleNext} style={styles.nextButton} />
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
    gap: 10,
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
  nextButton: {
    marginTop: 20,
  },
});

export default UploadProfilePic;
