import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions } from "react-native"
import { useNavigation } from '@react-navigation/native';
import StoryLoadingICon from "../icon-group/loadingStory"
let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingGenre: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
            <View style={styles.genre}>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",



    },
    genre: {
        marginHorizontal: 5,
        marginBottom: 10,
        height: 120,
        width: (width - 40) / 2 - 10,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "#E3E3E3",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(243, 243, 243, 0.7)",
    }
})