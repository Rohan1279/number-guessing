import { Text } from "react-native";

export default function Title({ children }) {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
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
