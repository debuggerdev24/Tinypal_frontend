import { Image, StyleSheet, Text, View } from 'react-native'

export const AskTinu = ({FlashCard}) => {
    return (
        <View style={styles.bottomBox}>
            <View style={[styles.bottomCircle,{backgroundColor:FlashCard ? "#002433" : "#470019"}]} />
            <View style={styles.bottomRow}>
                <Text>{FlashCard ? "What can I talk about instead?" : "What are considered distractions?"}</Text>
                <Image style={styles.askTinu} source={require('../../assets/Images/askTinu.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBox: {
        width: "100%",
        height: 75,
        backgroundColor: "#FFFFFF",
        marginTop: "auto",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    bottomCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 50,
        bottom: 40,
    },
    bottomRow: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignSelf: "center",
        bottom: 30,
    },
    askTinu: {
        width: 82,
        height: 33,
    },
})