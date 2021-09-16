import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconView from "../../icon-group/IconView";
import IconComment from "../../icon-group/IconComment";
import IconHeart from '../../icon-group/IconHeart';

let { width } = Dimensions.get("window")

interface Props {
    item:{
        cover: string;
        title: string;
        reaction:{
            viewCount : number;
            commentCount: number;
            likeCount:number;
        }
        
    }
    key:number;

}


export const ItemRecommendedStory: React.FC<Props> = (props) => {
    let url=`https:${props.item.cover}`
    let view = props.item.reaction.viewCount;
    let comment = props.item.reaction.commentCount;
    let like = props.item.reaction.likeCount;

    const navigation = useNavigation();

    return (
        
            
            <TouchableOpacity style={styles.story} activeOpacity={0.5} onPress={() => 
                        navigation.navigate('StoryDetail')} >
                
                <Image style={styles.img} source={{uri:url}}></Image>

                <View style ={styles.infoContainer}>
                    <View style ={styles.subInfo}>
                        <IconView/>
                        <Text style={styles.info}>{view}</Text>
                    </View>
                    <View style ={styles.subInfo}>
                        <IconComment/>
                        <Text style={styles.info}>{comment}</Text>
                    </View>
                    <View style ={styles.subInfo}>
                        <IconHeart/>
                        <Text style={styles.info}>{like}</Text>
                    </View>
                </View>
                    
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{props.item.title}</Text>
                    
            </TouchableOpacity>


    );
};
const styles = StyleSheet.create({
    
    story: {
        height: 130,
        width: width/3.3,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginHorizontal:2
        
    },
    placeholderContainer: {
        marginVertical:3,
        marginHorizontal: 3,
        height: 120,
        width: width /3.3,
        display:'flex',
        flexDirection: "column", 
        
    }, 

    title: {
        width: '100%',
        fontSize: 11,
        color:'#22201E',
        paddingHorizontal:3,
        justifyContent:'center',
        textAlign:'center',
        marginTop:3,
        fontFamily:'Montserrat-SemiBold'
    

    },
    info: {
        fontSize: 9,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'
        
    },

    infoContainer:{
        width:'100%',
        flexDirection: "row",
        display:'flex',
        justifyContent:'space-between',
        paddingHorizontal:5,
        marginTop:3        

    },
    subInfo:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },

    
    percent:{
        fontSize: 8,
        color: '#FF845D',
        fontWeight:'bold',
        marginRight:3
        
        

    },
    img:{
        width:width/3.4,
        height:80,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10

    }
    
})