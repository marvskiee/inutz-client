import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { externalStyle } from "../style/externalStyle";
import config from "../config/axios_config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);

  const emailHandler = (value) => {
    setEmail(value);
  };
  const passwordHandler = (value) => {
    setPassword(value);
  };

  const mounted = useRef();
  useEffect(async () => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (props.get_token) {
        props.action("notes");
      }
      // do componentDidUpdate logic
    }
  });

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (e) {
      // saving error
    } finally {
      props.set_token(token);
    }
  };
  const onSubmit = () => {
    const user = {
      email,
      password,
    };
    config
      .post("user/login", user)
      .then((res) => {
        if (res.data.status == "ok") {
          storeData(res.data._id);
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((error) => {
        setMessage(error.message);
      });
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
        <Text style={styles.splashText1}>Welcome back</Text>
        <TextInput
          style={styles.splashInput}
          onChangeText={emailHandler}
          placeholder="Email"
          autoFocus={true}
        />
        <TextInput
          style={styles.splashInput}
          onChangeText={passwordHandler}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={[styles.splashButton]}>
          <Text style={styles.splashButtonText} onPress={onSubmit}>
            Sign In
          </Text>
        </View>
        <Text style={styles.text} onPress={() => props.action("notes")}>
          Don't have an account?&nbsp;
          <Text style={styles.link} onPress={() => props.action("register")}>
            Register here
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
export default Login;
