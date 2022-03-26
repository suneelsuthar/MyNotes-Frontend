import React, { useState } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import theme from "../../theme";

const storage = getStorage();

export default function UploadPic(props) {
  console.log("<<<<<<<<props>>>>>>>>", props.url);
  const [image1, setImage1] = useState(props.url ? props.url : "");

  async function imageHandleChange(handleChange) {
    setImage1("");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      let newForm = new window.FormData();
      newForm.append("image", result);
      props.onPress(newForm, false);
    }
  }

  const uploadImage = async (result) => {
    // props.onPress(image1, false);
    // const imagename = result.uri.split("/");
    // const storageRef = ref(storage, imagename.reverse()[0]);
    // const response = await fetch(result.uri);
    // const blob = await response.blob();
    // await uploadBytes(storageRef, blob).then((snapshot) => {
    //   getDownloadURL(storageRef).then((url) => {
    //     setImage1(url);
    //     props.onPress(url, false);
    //   });
    // });
  };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={styles.addPhotos}
        onPress={() => imageHandleChange()}
      >
        {image1 ? (
          <Image
            style={styles.button}
            source={{ uri: image1 }}
            resizeMode="cover"
          />
        ) : null}
        {image1 === "" ? (
          <FontAwesome name="photo" size={34} color="#efe6e6" />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 0.5,
    padding: 8,
  },

  inputs: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingBottom: 5,
    fontFamily: "Poppins-Medium",
    height: 50,
  },
  dropdown: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "stretch",
  },
  formTitle: {
    fontSize: 15,
    paddingHorizontal: 0,
    backgroundColor: "#FAFAFA",
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    fontFamily: "Poppins-Medium",
  },
  formDescription: {
    fontSize: 13,
    paddingBottom: 14,
    fontFamily: "Poppins-Medium",
  },
  button: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  addPhotos: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    borderWidth: 2,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f2f2f2",
    // width: windowWidth ,
    flex: 1,
  },
});
