import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, Linking } from "react-native";
import { Header } from "../component/Header/Header";
import CustomBar from "../component/CustomBar/CustomBar";
import { AskTinu } from "../component/AskTinu/AskTinu";

const { width, height } = Dimensions.get("window");

export const DoYouKnow = () => {
    const [question, setQuestion] = useState('');
    const [question1, setQuestion1] = useState('');
    const [answer, setAnswer] = useState('');

    
    useEffect(() => {
        const getText = async () => {
            const response = await fetch('http://localhost:8000/api/didyouknow');
            const data = await response.json();
            const firstQuestion = data?.text?.text1;
            const firstQuestion1 = data?.text?.text2;
            const firstAnswer = data?.text?.answer;
            if (data) {
                setQuestion(firstQuestion)
                setQuestion1(firstQuestion1)
                setAnswer(firstAnswer)

            }
        };

        getText();
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.imageBackground}
                        source={require("../assets/Images/doyouknowscreen.png")}
                        resizeMode="cover"
                    />
                    <View style={styles.progressBarOuter}>
                        <CustomBar />
                    </View>
                </View>

                <View style={styles.pinkBox}>
                    <Image
                        style={styles.badge}
                        source={require("../assets/Images/doyouknow.png")}
                        resizeMode="contain"
                    />
                    <View style={styles.cardRow}>
                        <View style={styles.card}>
                            <Text style={styles.cardText}>
                                {question}
                            </Text>
                        </View>

                        <View style={styles.arrowWrapper}>
                            <Image
                                style={styles.arrow}
                                source={require("../assets/Images/middleArrow.png")}
                                resizeMode="contain"
                            />
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.cardText}>
                                {question1}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {answer}
                        </Text>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.journalLink}
                        onPress={() => Linking.openURL("https://www.journals.elsevier.com/applied-developmental-psychology")}
                    >
                        <Text style={styles.journalText}>
                            Journal of Applied Developmental Psychology
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dragIndicator} />
                <AskTinu />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#470019",
    },
    body: {
        flex: 1,
    },
    imageWrapper: {
        width: "100%",
        height: height * 0.55, // ~55% of screen height
        alignSelf: "center",
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
        top: height * 0.03, // dynamic top margin
    },
    pinkBox: {
        backgroundColor: "#E7809E",
        position: "absolute",
        width: 480,
        maxHeight: 400,
        bottom: '18%',
        borderTopRightRadius: 180,
        borderTopLeftRadius: 180,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        left: -40,
        alignItems: "center",
        paddingBottom: 25,
    },
    badge: {
        width: width * 0.28,
        height: height * 0.07,
        bottom: height * 0.04,
    },
    cardRow: {
        width: "75%",
        height: height * 0.12,
        marginTop: height * 0.015,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    card: {
        width: width * 0.38,
        height: height * 0.11,
        backgroundColor: "#FFFFFF33",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 5,
    },
    cardText: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: width * 0.04, // scales with screen width
        lineHeight: 20,
        textAlign: "center",
    },
    arrowWrapper: {
        width: width * 0.12,
        height: width * 0.12,
    },
    arrow: {
        width: "100%",
        height: "100%",
    },
    infoBox: {
        width: width * 0.8,
        marginTop: height * 0.04,
    },
    infoText: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: width * 0.045,
        lineHeight: 22,
        textAlign: "center",
    },
    journalLink: {
        width: width * 0.9,
        marginTop: height * 0.04,
    },
    journalText: {
        fontSize: width * 0.04,
        color: "#FCCCA8",
        fontWeight: "500",
        alignSelf: "center",
        textDecorationLine: "underline",
    },
    dragIndicator: {
        width: width * 0.1,
        height: 4,
        backgroundColor: "#FFFFFF99",
        position: "absolute",
        bottom: "14%",
        alignSelf: "center",
        borderRadius: 5,
    },
});

