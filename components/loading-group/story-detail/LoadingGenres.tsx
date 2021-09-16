import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingGenres: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Genres</Text>
            <SkeletonPlaceholder>
                <View style={styles.genres}></View>
            </SkeletonPlaceholder>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        flexDirection:'column',
        display: 'flex',
        marginHorizontal:15,
        marginTop:20,
        justifyContent:'flex-start',
        alignItems:'flex-start',

    },
    header:{
        fontSize:16,
        color: '#22201E',
        marginBottom:10,
        fontFamily:'Montserrat-Bold'
    },
      genres:{
        width:width-100,
        height:35,
        borderRadius:5

    },
})