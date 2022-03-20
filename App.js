import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const onGameRestartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
    setIsGameOver(false);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen excludeNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (guessRounds > 0) {
    content = (
      <GameOverScreen 
        totalRounds={guessRounds} 
        chosenNumber={userNumber} 
        restartGame={onGameRestartHandler}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
