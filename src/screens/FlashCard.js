import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Header } from '../component/Header/Header';
import CustomBar from '../component/CustomBar/CustomBar';
import { AskTinu } from '../component/AskTinu/AskTinu';

export const FlashCard = () => {

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  // Simple example to get text
  useEffect(() => {
    const getText = async () => {
      const response = await fetch('http://localhost:8000/api/flashcard');
      const data = await response.json();

      // Access text content
      const firstQuestion = data.flashcards;
      const firstAnswer = data.flashcards;
      if (response) {
        setQuestion(firstQuestion?.question)
        setAnswer(firstAnswer?.answer)

      }
    };

    getText();
  }, []);

  return (
    <View style={styles.container}>
      <Header FlashCard={true} />
      <View style={styles.body}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageBackground}
            source={require("../assets/Images/flashCard.png")}
          />
          <View style={styles.progressBarOuter}>
            <CustomBar />
          </View>
        </View>

        <View style={styles.cardWrapper}>
          <View style={styles.cardNumberWrapper}>
            <Text style={styles.cardNumber}>1</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.verticalLine} />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{question}</Text>
              <Text style={styles.description}>{answer}</Text>
            </View>
          </View>
        </View>

        <View style={styles.dragIndicator} />

        <AskTinu FlashCard={true} />

        <View style={styles.tinuImageWrapper}>
          <Image style={styles.tinuImage} source={require('../assets/Images/tinu.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "#002433",
  },
  imageWrapper: {
    width: "100%",
    height: 297,
    alignSelf: "center",
    backgroundColor: "#002433",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  progressBarOuter: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    top: 20,
  },
  cardWrapper: {
    paddingBottom:5,
    maxHeight: 275,
    width: "100%",
    backgroundColor: "#4C7B9E",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  cardNumberWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#4C7B9E",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -35,
    left: 20,
  },
  cardNumber: {
    color: "white",
    fontSize: 32,
    fontWeight: '700',
  },
  cardContent: {
    width: "85%",
    paddingHorizontal: 20,
    marginTop: 25,
    flexDirection: "row",
  },
  verticalLine: {
    height: 200,
    width: 5,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
  },
  textWrapper: {
    marginLeft: 14,
  },
  title: {
    color: "#FAF4F9",
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    color: "#FFFFFFCC",
    marginTop: 16,
    fontSize: 14,
    fontWeight: '600',
  },
  dragIndicator: {
    width: 35,
    height: 4,
    backgroundColor: "#FFFFFF99",
    position: "absolute",
    bottom: '13%',
    alignSelf: "center",
    borderRadius: 5,
  },
  tinuImageWrapper: {
    position: "absolute",
    bottom: '8%',
    left: 55,
  },
  tinuImage: {
    width: 50,
    height: 50,
  },
});
