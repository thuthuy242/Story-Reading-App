import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import StoryLoadingICon from "../icon-group/loadingStory"
import { LinearGradient } from "expo-linear-gradient";
let { width } = Dimensions.get("window")
const banner1 = require("../../assets/images/banner3.png");
const banner2 = require("../../assets/images/banner2.png")
interface Props {
    routes: any;
    navigation?: any

}

export const GenreItem: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.genre}>
                <Image source={banner1} style={styles.image}></Image>
                <View style={styles.chen}
                >
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.7)']}
                        style={styles.chen}
                    >
                        <Text style={styles.text}>Action</Text>
                        <Text style={styles.text}>icon</Text>
                    </LinearGradient>
                </View>
            </View >
        </View >
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
        position: "relative",
        marginHorizontal: 5,
        marginBottom: 10,
        height: 120,
        width: (width - 40) / 2 - 10,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "rgba(245, 245, 245, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "rgba(243, 243, 243, 0.7)",
    },
    image: {
        height: 118,
        width: (width - 40) / 2 - 12,
        borderWidth: 1.5,
        borderRadius: 10,
    },
    chen: {
        height: 120,
        width: (width - 40) / 2 - 10,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "rgba(245, 245, 245, 0.8)",
        position: "absolute",
        backgroundColor: "rgba(243, 243, 243, 0.5)",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontFamily:'Montserrat-Bold',
    }

})