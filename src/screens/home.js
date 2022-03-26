import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { globalStyles } from "../../styles/global";
import NotesCard from "./../components/NotesCard";
import Feather from "react-native-vector-icons/Feather";
import { Provider } from "react-native-paper";
import { ref, onChildAdded, remove } from "firebase/database";
import { db } from "./../config";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { URL } from "./../../config";
import axios from "axios";
const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [num, setnum] = React.useState();
  const [products, setproducts] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    setLoading(false);
    fetchNotes();
    navigation.addListener("focus", () => {
      fetchNotes();
    });
  }, [navigation]);

  const headers = {
    Accept: "*",
  };
  const fetchNotes = async () => {
    await axios
      .get(`http://192.168.147.166:3000/api/notes`, headers)
      .then(async (response) => {
        setproducts(response.data);
      })
      .catch((error) => {});
  };

  const filteredData = products.filter((data) => {
    console.log(data.title);
    if (products.length !== 0) {
      if (search !== "") {
        return (
          data.title && data.title.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return products;
      }
    } else {
      return products;
    }
  });

  return (
    <Provider>
      <SafeAreaView style={globalStyles.container}>
        {loading === true ? (
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              // opacity: 0.6,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <ActivityIndicator size="small" color={theme.primary} />
          </View>
        ) : null}
        <View style={styles._header_row}>
          <View style={styles._search_bar}>
            <Feather active name="search" style={{ color: "grey" }} size={20} />
            <TextInput
              placeholder="Search Notes"
              style={styles._serch_Text}
              value={search}
              onChangeText={(e) => setsearch(e)}
            />
          </View>
          <TouchableOpacity
            style={styles._header_circle}
            onPress={() => navigation.navigate("AddNotes")}
          >
            <Ionicons name="md-add" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles._my_notes_list}>
          <View>
            <View style={styles._label_view}>
              <Text style={styles._heading}>MY NOTES</Text>
            </View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 300 }}
              data={filteredData}
              keyExtractor={(item) => "ab" + Math.random().toString()}
              renderItem={({ item }) => (
                <NotesCard data={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default Home;
const styles = StyleSheet.create({
  //header style

  safeAreaView: {
    backgroundColor: "#f5fbff",
  },

  searchFilter: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 32,
    backgroundColor: "#F1F1F1",
    marginBottom: 8,
    marginTop: 40,
  },

  firstFiveTopBox: {
    alignItems: "center",
    marginBottom: 5,
    paddingBottom: 2,
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#FFFFFF",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: 170,
    color: "#0D7E73",
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "grey",
  },

  business: {
    marginBottom: 5,
    borderWidth: 3,
    borderColor: "green",
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },

  filter: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 3,
    borderWidth: 2,
    borderColor: "#0D7E73",
    padding: 5,
    marginLeft: 20,
    borderRadius: 10,
  },

  imageSizeBusiness: {
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
  },
  imageSize: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginTop: 20,
  },
  _input: {
    flex: 1,
    fontFamily: "Poppins-Medium",
  },
  _header_row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  _search_bar: {
    borderWidth: 2,
    marginHorizontal: 10,
    flex: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 40,
    paddingHorizontal: 10,
    backgroundColor: "#F1F1F1",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _serch_Text: {
    fontSize: 15,
    margin: 0,
    height: 45,
    flex: 1,
    paddingLeft: 5,
  },
  _header_circle: {
    backgroundColor: "#F1F1F1",
    // height: 36,
    // width: 36,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: "grey",
    padding: 5,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _menue_text: {
    fontFamily: "Poppins-Medium",
    marginLeft: 15,
  },
  _my_notes_list: {
    padding: 10,
  },
  _label_view: {
    alignSelf: "flex-start",
    backgroundColor: theme.primary,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 25,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 5,
  },
  _heading: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: theme.primary,
    marginBottom: -2,
    color: "white",
  },
});
