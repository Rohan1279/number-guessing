import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.45 }}
      >
        {/* <SafeAreaView style={styles.rootScreen}> */}
        {userNumber ? (
          <GameScreen userNumber={userNumber} />
        ) : (
          <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
        )}
        {/* </SafeAreaView> */}
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.45,
  },
});
