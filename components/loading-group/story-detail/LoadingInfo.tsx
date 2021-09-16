import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingInfo: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={styles.img}></View>
                    <View style= {styles.titleContainer}></View>
                    <View style= {styles.subtitle}></View>
                    <View style= {styles.rating}></View>
                    <View  style={styles.info}>
                        <View style={styles.subInfo}></View>
                        <View style={styles.subInfo}></View>
                        <View style={styles.subInfo}></View>
                        <View style={styles.subInfo}></View>
                    </View>
                    <View style={styles.sumContainer} />
                    

                </View>

                
            </SkeletonPlaceholder>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        flexDirection:'column',
        display: 'flex',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',

    },
    placeholderContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },

    img:{
        width:170,
        height:230,
        borderRadius:20,

    },
    
    titleContainer:{
        width:250,
        marginTop:10,
        height:25,
        borderRadius:5


    },


    subtitle:{
        width:200,
        height:15,
        marginTop:8,
        borderRadius:5
    },
    rating:{
        width:200,
        height:15,
        marginTop:8,
        borderRadius:5,
    },


    info:{
        flexDirection:'row',
        height:50,
        display:'flex',
        width:width,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:12,
    },
    
    subInfo:{
        width:50,
        height:40,
        borderRadius:5
    },
    sumContainer: {
        marginTop:20,
        width:width-30,
        height:100,
        borderRadius:5
    },
    genreContainer: {
        marginTop:20,
        width:width-100,
        height:35,
        borderRadius:5,
        marginStart:width-(width+70)

    },



})