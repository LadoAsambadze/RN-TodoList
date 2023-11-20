import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props) {
  const [mark, setMark] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.firstDiv}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.forText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  firstDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "rgba(85, 188, 246, 0.50)",
    marginRight: 15,
  },
  forText: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
  },
});
