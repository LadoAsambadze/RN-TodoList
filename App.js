import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Task from "./components/Task";
import Plus from "./assets/plus.png";
import { useState } from "react";

export default function App() {
  const [focused, setFocused] = useState(false);
  const [task, setTask] = useState();
  const [taskArray, setTaskArray] = useState([]);
  const handlePressOutside = () => {
    if (focused) {
      setFocused(false);
      Keyboard.dismiss();
    }
  };

  const handleAddTask = () => {
    if (task) {
      setTaskArray([...taskArray, task]);
      setTask(null);
    }
  };

  const completeTask = (index) => {
    let taskArrayCopy = [...taskArray];
    taskArrayCopy.splice(index, 1);
    setTaskArray(taskArrayCopy);
  };
  console.log(taskArray);
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.list}>
          <Text style={styles.header}>Today’s tasks!</Text>
          {taskArray.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <View>
            <KeyboardAvoidingView style={styles.inputContainer}>
              <TextInput
                placeholder={focused ? "" : "Write a task"}
                placeholderTextColor={"#C0C0C0"}
                textAlign={focused ? "left" : "center"}
                style={styles.inputField}
                onFocus={() => {
                  setFocused(true);
                }}
                onBlur={() => {
                  setFocused(false);
                }}
                value={task}
                onChangeText={(text) => setTask(text)}
              />
              <TouchableOpacity style={styles.circle} onPress={handleAddTask}>
                <View>
                  <Image source={Plus} />
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
    paddingBottom: 37,
    paddingTop: 97,
    justifyContent: "space-between",
  },

  header: {
    color: "#1A1A1A",
    fontSize: 28,
    fontStyle: "normal",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputField: {
    borderRadius: 60,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 260,
    fontSize: 14,
    fontStyle: "normal",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  circle: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
      },
      android: {
        elevation: 4,
      },
    }),
    borderRadius: 52,
    width: 60,
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
