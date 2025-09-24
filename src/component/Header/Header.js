import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { ProgressContext } from "../ProgressContext";

export const Header = ({ FlashCard }) => {
  const { visible, setVisible } = useContext(ProgressContext);
  return (
    <View style={[styles.container, { backgroundColor: FlashCard ? "#002433" : "#470019", }]}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setVisible(visible === 'doyouknow' ? 'flashcard' : 'doyouknow')}
          style={styles.backButton}>
          <Image
            tintColor={"white"}
            source={require("../../assets/Images/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Unlearn Old Patterns</Text>
          <Text style={styles.subtitle}>Distractions=No No!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#470019",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    marginVertical: 10,
  },
  backButton: {
    width: 20,
    height: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  divider: {
    height: 32,
    borderWidth: 1,
    borderColor: "#FFFFFF52",
    marginLeft: 20,
  },
  textWrapper: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#FFFFFF80",
  },
});
