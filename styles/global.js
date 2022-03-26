import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "CG-regular",
    fontSize: 12,
    fontWeight: "bold",
    color: "#122e31",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  label: {
    padding: 5,
    fontSize: 12,
    color: "blue",
  },
  inputTopLabel: {
    paddingTop: 15,
    // paddingBottom: 5,
    color: "black",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  storeName: {
    textAlign: "right",
    color: "#0000FF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    /*fontSize: 18,*/
    borderRadius: 6,
    height: 50,
    fontFamily: "Poppins-Regular",
  },
  links: {
    color: "#0645AD",
    textAlign: "center",
    // fontWeight: "bold",
    padding: 7,
    fontFamily: "Poppins-Medium",
  },

  errorText: {
    // marginBottom: 5,
    color: "crimson",
    fontFamily: "Poppins-Regular",
    // paddingTop: 10,
    fontSize: 12,
  },
});

// export const images = {
//   ratings: {
//     1: require("../assets/rating-1.png"),
//     2: require("../assets/rating-2.png"),
//     3: require("../assets/rating-3.png"),
//     4: require("../assets/rating-4.png"),
//     5: require("../assets/rating-5.png"),
//   },
// };
