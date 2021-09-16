import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconView from "../../icon-group/IconView";
import IconChapter from '../../icon-group/IconChapter';

let { width } = Dimensions.get("window")

interface Props {
    item:{
        id:string
        cover:string
        title:string
        reaction:{
            viewCount: number
        }
    }
        
    key:number;    

}

interface ImageSourcePropType {
	data: string;
	
  }

export const ItemStoryRecommend: React.FC<Props> = (props) => {
    let url=`https:${props.item.cover}`;
    let view = props.item.reaction.viewCount;
    const navigation = useNavigation();

    return (
            <TouchableOpacity style={styles.story} activeOpacity={0.5} onPress={() => 
                navigation.navigate('StoryDetail', {itemId:props.item.id})} >
            <Image style={styles.img} source={{uri:url}}></Image>
                <View style={styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{props.item.title}</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <View style ={styles.subInfo}>
                            <IconView/>
                            <Text style={styles.info}>{view}</Text>
                        </View>
                        <View style ={styles.subInfo}>
                            <IconChapter/>
                            <Text style={styles.info}>1234</Text>
                        </View>
                            
                    </View>

                </View>
                
            </TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection:'column',
        display: 'flex',
        borderWidth:2,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:'white',
        padding:15

    },
    stories:{
        alignItems: "center",
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        display: 'flex',

    },
    header:{
        fontSize:16,
        color: '#22201E',
        marginBottom:10,
        fontFamily:'Montserrat-Bold'
    },
    story: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        height: 160,
        width: width/3.35,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginBottom:3,
        
    },

    infoContainer:{
        width: width /3.38,
        height:50,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5
        
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
    info: {
        fontSize: 8,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'
        
    },
    subtitle: {
        width:'100%',
        flexDirection: "row",
        display:'flex',
        justifyContent:'space-between',
    },
    subInfo:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },
    
    img:{
        width:width/3.45,
        height:105,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8

    },



})