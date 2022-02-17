import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { externalStyle } from "../style/externalStyle";
const TopNav = (props) => {
  return (
    <View style={styles.topNav}>
      <Text style={styles.navLogo}>Inutz</Text>
      <TouchableOpacity onPress={() => props.action("profile")}>
        <Image
          style={styles.navAvatar}
          source={require("../assets/avatar.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
export default TopNav;
