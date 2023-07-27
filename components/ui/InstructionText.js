import { StyleSheet, Text, View } from "react-native";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
  // override the default styles
}
const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans", // "open-sans-bold
    color: "#ddb52f",
    fontSize: 24,
    textAlign: "center",
  },
});
