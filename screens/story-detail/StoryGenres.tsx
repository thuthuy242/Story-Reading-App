import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { StoryGenre } from '../../components/item-group/story-detail/StoryGenre';


let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const StoryGenres: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Genres</Text>
            <View style={styles.genreComponents}>
                <StoryGenre/>
                
            </View>
            
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
    genreComponents:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        
      },
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