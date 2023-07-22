import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, pressHandler }) {
  return (
    <View style={styles.buttonOutereContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? {
                backgroundColor: "white",
                paddingVertical: 8,
                paddingHorizontal: 16,
                elevation: 2,
                opacity: 0.5,
              }
            : {
                backgroundColor: "#72063c",
                paddingVertical: 8,
                paddingHorizontal: 16,
                elevation: 2,
              }
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutereContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "50%",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
