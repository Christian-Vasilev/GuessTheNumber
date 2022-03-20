import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);

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
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log('error occured')}
      />
    )
  }

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
