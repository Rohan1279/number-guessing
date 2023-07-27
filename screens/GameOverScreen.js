import { Image, View } from "react-native";
import { Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title>GAME OVER</Title>
      <View
        style={{
          borderRadius: 150,
          width: 300,
          height: 300,
          overflow: "hidden",
          borderWidth: 3,
          borderColor: "black",
          margin: 30,
        }}
      >
        <Image
          source={{
            uri: "https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/images/success.png?raw=true",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontFamily: "open-sans",
          marginBottom: 20,
        }}
      >
        Your phone needed <Text style={{ color: "red" }}>0</Text> rounds to
        guess the number <Text style={{ color: "red" }}>0</Text>
      </Text>
      <PrimaryButton>
        <Text style={{ color: "white" }}>NEW GAME</Text>
      </PrimaryButton>
    </View>
  );
}
