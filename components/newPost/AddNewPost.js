import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <FormikPostUploader navigation={navigation} />
  </View>
);

const Header = ({ navigation }) => (
  <SafeAreaView style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/128/5720/5720446.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 45,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 23,
  },
});

export default AddNewPost;
