import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const [gameIsOver, setGameIsOver] = useState(false);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StatusBar style="light" />
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        resizeMode="cover"
        style={{ flex: 1, padding: 50 }}
        imageStyle={{ opacity: 0.45 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {!gameIsOver ? (
            userNumber ? (
              <GameScreen
                userNumber={userNumber}
                setGameIsOver={setGameIsOver}
              />
            ) : (
              <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
            )
          ) : (
            <GameOverScreen />
          )}
          {/* {userNumber ? (
          <GameScreen userNumber={userNumber} setGameIsOver={setGameIsOver} />
        ) : (
          <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
        )}
        {gameIsOver && userNumber && <GameOverScreen />} */}
        </SafeAreaView>
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
