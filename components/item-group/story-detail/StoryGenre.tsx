import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const StoryGenre: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View  style={styles.genreText}>
            <Text style={styles.text} >Abcd efgh </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    
      genreText:{
        borderRadius: 10,
        backgroundColor:"rgba(244, 244, 244, 0.4)",
        padding:8,
        marginRight:5,
        marginBottom:5

    },
    text:{
      color: '#6E747C',
      fontSize: 12,
      fontFamily:'Montserrat-Regular',

    },
       

})