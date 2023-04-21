import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider, Image } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://cdn-icons-png.flaticon.com/128/9187/9187555.png",
    inactive: "https://cdn-icons-png.flaticon.com/128/747/747846.png",
  },
  {
    name: "Search",
    active: "https://cdn-icons-png.flaticon.com/128/9131/9131873.png",
    inactive: "https://cdn-icons-png.flaticon.com/128/5948/5948471.png",
  },
  {
    name: "Reels",
    active: "https://cdn-icons-png.flaticon.com/128/7390/7390677.png",
    inactive: "https://cdn-icons-png.flaticon.com/128/5948/5948481.png",
  },
  {
    name: "Shop",
    active: "https://cdn-icons-png.flaticon.com/128/8010/8010038.png",
    inactive: "https://cdn-icons-png.flaticon.com/128/5948/5948492.png",
  },
  {
    name: "Profile",
    active:
      "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60.png",
    inactive: "https://cdn-icons-png.flaticon.com/128/9187/9187532.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab //profilepic white
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // wrapper: {
  //   position: "absolute",
  //   width: "100%",

  //   bottom: "3%",
  //   zIndex: 999,
  //   backgroundColor: "#000",
  // },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 25,
    height: 25,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
