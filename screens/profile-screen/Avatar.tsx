import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, Image, TouchableOpacity, Touchable } from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import { useNavigation } from '@react-navigation/native';

let { width, height } = Dimensions.get("window")

const background = require("../../assets/images/background.png");
// import Banner from "./banner/HomeBanner"
// import ListHotStory from './HomeListHotStory';
function Avatar(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profile} activeOpacity={0.5} onPress={() => 
                        navigation.navigate("Login")} >
                <Image source={background} style={styles.image}></Image>
                <Text style={styles.name}> Click to login</Text>
            </TouchableOpacity>
            <View style={styles.extraInfor}>
                <View style={styles.value}>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.text}>Coins</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.text}>Points</Text>
                </View>
                <View style={styles.value}>
                    <Text style={styles.number}>0</Text>
                    <Text style={styles.text}>Votes</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        height: 170,
        width: width,
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",


    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    name: {
        marginTop:8,
        fontSize: 18,
        fontFamily:"Montserrat-Bold",
        textAlign: "center",
        color:"#22201E"
        
    },
    extraInfor: {
        width:width,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    removeBackground: {
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    number: {

        fontFamily:"Montserrat-Bold",
        fontSize: 16,
        textAlign: "center",
        color: "#2BA5FF"
    },
    text: {
        fontFamily:"Montserrat-Regular",
        fontSize:12,
        color: "#6E747C"
    },
    value: {
        marginTop: 10,
        marginHorizontal: 30,
        //stextAlign: 'center',
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    profile:{
        display:"flex",
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    }
});
export default Avatar;