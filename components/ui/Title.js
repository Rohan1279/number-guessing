import { Text } from "react-native";

export default function Title({ children }) {
  return (
    <Text
      style={{
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
      }}
    >
      {children}
    </Text>
  );
}
