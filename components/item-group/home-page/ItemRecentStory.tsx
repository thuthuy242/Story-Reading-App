import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
let { width } = Dimensions.get("window")

interface Props {
    item:{
        cover: string;
        title: string;
    }
    key:number;

}

const Progress = ({step, steps}) => {
    return (
        <View style = {styles.progressBar}>
            <View style = {styles.progressContainer}>
                <View style = {styles.progress}>
                </View>
            
            </View>

            <Text style = {styles.percent}>60%</Text>
        </View>
        
    )
}

export const ItemRecentStory: React.FC<Props> = (props) => {
    let url=`https:${props.item.cover}`	

    const navigation = useNavigation();

    return (
        
            
            <TouchableOpacity style={styles.story} activeOpacity={0.5} onPress={() => 
                        navigation.navigate('StoryDetail')} >
                
                <Image style={styles.img} source={{uri:url}}></Image>

        
                <View style={styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{props.item.title}</Text>
                    </View>
                    <Text style={styles.chapter}>Chapter: 1234</Text>
                    <Progress step={1} steps={10}/>

                </View>
                
            </TouchableOpacity>
            
        
    );
};
const styles = StyleSheet.create({

    story: {
        marginVertical:3,
        height: 150,
        width: width/2.2,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',
        marginHorizontal:3
        
    },
    infoContainer:{
        width: width /2.2,
        height:58,
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5,


    },

    titleContainer:{
        height:28,
        justifyContent:'center',
    },

    title: {
        fontSize: 11,
        color:'#22201E',  
        fontFamily:'Montserrat-SemiBold'  

    },

    chapter: {
        fontSize: 8,
        color: '#6E747C',   
        alignSelf:'flex-start',
        fontFamily:'Montserrat-Medium'
    },


    progressContainer:{
        height: 8,
        width:width /2.8,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor:'white',
        

        
    },
    progress:{
        height: 6,
        borderRadius: 4,
        width: ((width/2.8)*0.6),
        backgroundColor: "black",
        position: 'absolute',


    },
    progressBar: {
        width:width/2.3,
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'space-between',

    },
    percent:{
        fontSize: 8,
        color: '#FF845D',
        marginRight:5,
        fontFamily:'Montserrat-SemiBold'
    },
    img:{
        width:width/2.245,
        height:90,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8

    }
    
})