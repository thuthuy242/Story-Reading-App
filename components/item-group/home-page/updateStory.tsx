import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconUpdate from '../../icon-group/IconUpdate';
let { width } = Dimensions.get("window");
interface Props {
    item:{
		title:string
		cover:string
	}
	key:number
}
interface ImageSourcePropType {
	data: string;
	
  }
  
export const UpdatedStory: React.FC<Props> = (props) => {

let url=`https:${props.item.cover}`	
    const navigation = useNavigation();
    return (
       
            <View style={styles.story}>
                <Image source={{uri:url}} style={styles.img} ></Image>
                <View style={styles.infoContainer}>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{props.item.title}</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <Text style={styles.chapter}>Chapter: 1234</Text>
                        <View style ={styles.subInfo}>
                            <IconUpdate/>
                            <Text style={styles.time}>2h ago</Text>
                        </View>
                        
                    </View> 
            </View>  
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: width

    },
    story: {
        marginHorizontal: 5,
        height: 175,
        width: width /3.2,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',
    },

    img:{
        width:width/3.3,
        height:120,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8
    },

    infoContainer:{
        width: width /3.2,
        height:50,
        display:'flex',
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
        fontWeight: '500',
        color:'#22201E',
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
    chapter: {

        fontSize: 8.5,
        fontWeight: "300",
        color: '#6E747C'

    },
    time: {
        fontSize: 8,
        fontStyle:'italic',
        fontWeight: "300",
        color: '#A1A1A1'

    },

    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 5,
        height: 175,
        width: width /3.2,
        display:'flex',
        flexDirection: "column", 
        
    },

    
    
})