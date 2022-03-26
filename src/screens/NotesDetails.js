import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { globalStyles } from "../../styles/global.js";
import { showMessage } from "react-native-flash-message";
import UploadPic from "../components/uploadPic.js";
import theme from "../../theme.js";
export default function NotesDetails({ navigation, route }) {
  const [image1, setImage1] = useState(route.params.data.imgUrl);
  const [title, settitle] = useState(route.params.data.title);
  const [desc, setdesc] = useState(route.params.data.content);
  const [isLoading, setIsLoading] = useState(false);
  const AddProduct = () => {
    if (title === "") {
      showMessage({
        message: "Enter product title",
        type: "danger",
      });
    } else if (desc === "") {
      showMessage({
        message: "Enter product description",
        type: "danger",
      });
    } else {
      // need add note api here
      alert("working");
    }
  };

  const imageHandleChange = (uri, loading) => {
    setIsLoading(loading);
    setImage1(uri);
  };

  const dropdownHandleChange = (v) => {
    setCategory(v);
    setExpanded(false);
  };

  console.log(route.params.data);
  let data = route.params.data;
  return (
    <View style={styles.container}>
      {isLoading === true ? (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      ) : null}
      <View style={styles._inner_layer}>
        <View style={styles._header}>
          <TouchableOpacity>
            <Image
              source={require("./../../assets/email.png")}
              style={styles._icons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./../../assets/messages.png")}
              style={styles._icons}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View>
            <Text
              style={[
                globalStyles.inputTopLabel,
                { paddingTop: 0, marginTop: 25 },
              ]}
            >
              TITLE *{" "}
            </Text>
            <TextInput
              style={globalStyles.input}
              maxLength={400}
              value={title}
              onChangeText={(e) => settitle(e)}
            />

            <Text style={[globalStyles.inputTopLabel, { marginTop: 10 }]}>
              {" "}
              IMAGE (OPTIONAL) *{" "}
            </Text>
            <UploadPic onPress={imageHandleChange} />

            <Text style={[globalStyles.inputTopLabel, { paddingTop: 20 }]}>
              {" "}
              NOTE *{" "}
            </Text>
            <TextInput
              style={[globalStyles.input, { height: 180 }]}
              maxLength={800}
              multiline={true}
              value={desc}
              onChangeText={(e) => setdesc(e)}
            />
          </View>

          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => navigation.goBack()}
            disabled={image1 === "" ? true : false}
          >
            <Text style={styles.findPosts}>Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    flex: 1,
  },

  doneBtn: {
    marginBottom: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
    flexDirection: "row",
    marginTop: 30,
  },
  findPosts: {
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    color: "white",
  },
  payment_containers: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },

  _header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  _inner_layer: {
    flex: 1,
  },
  _icons: {
    height: 30,
    width: 35,
    marginHorizontal: 5,
  },
});
