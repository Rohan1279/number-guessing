import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  setGameIsOver,
  setTotalGuessRounds,
}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      setGameIsOver(true);
      setTotalGuessRounds(guessRounds.length);
    }
  }, [currentGuess, userNumber, setGameIsOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((currentGuesses) => [newRndNumber, ...currentGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttons}>
            <PrimaryButton pressHandler={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton pressHandler={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keExtractor={(item) => item.toString()}
        />
      </View>
      {/* {guessRounds.map((guess, index) => (
          <Text key={index}>{guess}</Text>
        ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 12,
    color: "#aab52f",
  },
});
