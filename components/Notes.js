import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { externalStyle } from "../style/externalStyle";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import config from "../config/axios_config";
import colors from "../config/colors";

const Notes = (props) => {
  const mounted = useRef();
  const selectHandler = (data) => {
    props.set_selected(data);
    props.action("selected-note");
  };
  useEffect(async () => {
    if (!mounted.current) {
      await config
        .get("note/find/" + props.get_token)
        .then((res) => props.set_notes(res.data.message))
        .catch((e) => console.log("Warning Occur in Notes.js: " + e.message));
      mounted.current = true;
    }
  });
  return (
    <View style={styles.containerNotCenter}>
      <TopNav action={props.action} />
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ paddingVertical: 10 }}>
          {props.get_notes.length > 0 ? (
            props.get_notes.map((data, index) => (
              <TouchableOpacity key={index} onPress={() => selectHandler(data)}>
                <View style={[styles.card, styles.shadowProp]}>
                  <Text style={styles.cardTitle}>{data["title"]}</Text>
                  <Text style={styles.cardBody} numberOfLines={4}>
                    {data["body"]}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                color: colors.gray,
                fontSize: 20,
                textAlign: "center",
                paddingVertical: 30,
              }}
            >
              Note is Empty
            </Text>
          )}
        </View>
      </ScrollView>
      <BottomNav action={props.action} />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
export default Notes;
