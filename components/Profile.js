import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { externalStyle } from "../style/externalStyle";
import config from "../config/axios_config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../config/colors";

const Profile = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState([]);

  const oldPasswordHandler = (e) => {
    setOldPassword(e);
  };
  const newPasswordHandler = (e) => {
    setNewPassword(e);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e);
  };

  const mounted = useRef();
  useEffect(async () => {
    if (!mounted.current) {
      if (props.get_token == "") {
        props.action("login");
      }
      mounted.current = true;
      await config
        .get("user/find/" + props.get_token)
        .then((res) => props.set_profile(res.data.message))
        .catch((err) =>
          console.log("Warning Error Occur in Profile.js: " + err.message)
        );
    } else {
      // do componentDidUpdate logic

      mounted.current = false;
    }
  });
  const storeData = async () => {
    try {
      await AsyncStorage.removeItem("token", "");
    } catch (err) {
      console.log("Warning Error Occur in Profile.js: " + err.message);
    } finally {
      props.set_token("");
      props.set_notes([]);
      props.set_profile(null);
    }
  };
  const logoutHandler = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel" },
      {
        text: "Ok",
        onPress: storeData,
      },
    ]);
  };
  const submitHandler = async () => {
    const password = {
      oldPassword,
      newPassword,
      confirmPassword,
      id: props.get_profile._id,
      password: props.get_profile.password,
    };
    await config
      .put("user/change-password", password)
      .then((res) => setMessage(res.data.message))
      .catch((error) => setMessage(error.message));
  };

  return (
    <View style={styles.containerNotCenter}>
      <View style={styles.profileNav}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => props.action("notes")}>
            <Image
              style={[styles.navAvatar, styles.backButton]}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", color: colors.violet }}
          >
            Profile
          </Text>
        </View>

        <View>
          <Text style={styles.buttonPlain} onPress={logoutHandler}>
            Logout
          </Text>
        </View>
      </View>
      <ScrollView style={{ width: "100%", padding: 20 }}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileAvatar}
            source={require("../assets/avatar.jpg")}
          />
          <View style={{ margin: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              {props.get_profile && props.get_profile.name}
            </Text>
            <Text style={{ paddingVertical: 10, textAlign: "center" }}>
              {props.get_profile && props.get_profile.email}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.profileHeader}>Account Information</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, { color: colors.black }]}
            value={props.get_profile && props.get_profile.name}
            editable={false}
          />
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={[styles.input, { color: colors.black }]}
            value={props.get_profile && props.get_profile.email}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.profileHeader}>Change Password</Text>
          <View style={styles.errorContainer}>
            {message &&
              message.map((data, key) => (
                <Text key={key} style={styles.errorText}>
                  {data}
                </Text>
              ))}
          </View>
          <Text style={styles.label}>Old Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={oldPasswordHandler}
            secureTextEntry={true}
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={newPasswordHandler}
            secureTextEntry={true}
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={confirmPasswordHandler}
            secureTextEntry={true}
          />
          <View style={styles.profileButton}>
            <Text style={styles.profileButtonText} onPress={submitHandler}>
              Update Password
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
export default Profile;
