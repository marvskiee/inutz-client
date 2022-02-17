import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { externalStyle } from "../style/externalStyle";
import config from "../config/axios_config";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState([]);

  const nameHandler = (value) => {
    setName(value);
  };
  const emailHandler = (value) => {
    setEmail(value);
  };
  const passwordHandler = (value) => {
    setPassword(value);
  };
  const confirmPasswordHandler = (value) => {
    setConfirmPassword(value);
  };

  const onSubmit = async () => {
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    await config
      .post("user/register", user)
      .then((res) => setMessage(res.data.message))
      .catch((error) => setMessage(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.splashForm}>
        <View style={styles.errorContainer}>
          {message &&
            message.map((data, key) => (
              <Text key={key} style={styles.errorText}>
                {data}
              </Text>
            ))}
        </View>
        <Text style={styles.splashText1}>Create an account</Text>
        <TextInput
          style={styles.splashInput}
          onChangeText={nameHandler}
          placeholder="Name"
          autoFocus={true}
        />
        <TextInput
          style={styles.splashInput}
          onChangeText={emailHandler}
          placeholder="Email"
        />
        <TextInput
          style={styles.splashInput}
          onChangeText={passwordHandler}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.splashInput}
          onChangeText={confirmPasswordHandler}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <View style={[styles.splashButton]}>
          <Text style={styles.splashButtonText} onPress={onSubmit}>
            Sign Up
          </Text>
        </View>
        <Text style={styles.text} onPress={() => props.action("notes")}>
          Already have an account? &nbsp;
          <Text style={styles.link} onPress={() => props.action("login")}>
            Login here
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
export default Register;
