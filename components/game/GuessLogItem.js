import { Text, View } from "react-native";
export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View
      style={{
        borderColor: "#4e0329",
        borderWidth: 1,
        borderRadius: 24,
        padding: 12,
        marginVertical: 10,
        backgroundColor: "#ddb52f",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      <Text
        style={{
          fontFamily: "open-sans-bold",
          fontSize: 18,
          color: "#4e0329",
        }}
      >
        #{roundNumber}
      </Text>
      <Text
        style={{
          fontFamily: "open-sans-bold",
          fontSize: 18,
          color: "#4e0329",
        }}
      >
        Opponent's guess: {guess}
      </Text>
    </View>
  );
}
