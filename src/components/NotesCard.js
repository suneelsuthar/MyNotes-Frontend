import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import theme from "../../theme";

const ProductListCard = ({ data, navigation, onPress }) => {
  return (
    <ImageBackground
      style={styles._card}
      source={{ uri: data.imgUrl }}
      resizeMode="cover"
    >
      <View style={styles._Card_detail}>
        <Text numberOfLines={1} style={styles._notes_name}>
          {"  "}
          {data.title}
          {"  "}
        </Text>

        <Text style={styles._details} numberOfLines={2}>
          {"  "}
          {data.content}
          {"  "}
        </Text>
        <View style={styles._card_footer}>
          <TouchableOpacity
            style={styles._viewDetails}
            onPress={() => navigation.navigate("NotesDetails", { data: data })}
          >
            <Text style={styles._viewDetails_text}>Notes Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  _card: {
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    // elevation: 10,
    resizeMode: "cover",
    height: 170,
    overflow: "hidden",
  },

  _notes_name: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "white",
    backgroundColor: theme.primary,
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  _card_footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  _viewDetails: {
    backgroundColor: theme.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  _viewDetails_text: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
  },

  _Card_detail: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    paddingLeft: 10,
    backgroundColor: "#d9d9d924",
  },
  _details: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
    color: "white",
    backgroundColor: theme.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 3,
  },
});
