import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconSend from '../../icon-group/IconSend';
import IconSticker from '../../icon-group/IconSticker'

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const StoryCmt: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.title}>Comments</Text>
                <Text
                    style={styles.subtitle}
                > See more {'>'} </Text>
            </View>
            
            <View style={styles.commentContainer}>
                <View style={styles.comment}>
                    <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                    <View style={styles.content}>
                        <View style={styles.commentHeader}>
                            <Text style={styles.name}>Thu Thuy</Text>
                            <Text style={styles.time}>4 minutes ago</Text>

                        </View>
                        <Text style={styles.commentText}>Day la comments abcdefghijgsdfhakjfhjsdfjksdfhjksdhfksdhfiuaeyriudsjkfhjkdfh</Text>
                        <View style={styles.commentAction}>
                            <Text style={styles.action}>Like</Text>
                            <Text style={styles.action}>Reply</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.comment}>
                    <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                    <View style={styles.content}>
                        <View style={styles.commentHeader}>
                            <Text style={styles.name}>Thu Thuy</Text>
                            <Text style={styles.time}>4 minutes ago</Text>

                        </View>
                        <Text style={styles.commentText}>Day la comments abcdefghijgsdfha</Text>
                        <View style={styles.commentAction}>
                            <Text style={styles.action}>Like</Text>
                            <Text style={styles.action}>Reply</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.comment}>
                    <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                    <View style={styles.content}>
                        <View style={styles.commentHeader}>
                            <Text style={styles.name}>Thu Thuy</Text>
                            <Text style={styles.time}>4 minutes ago</Text>

                        </View>
                        <Text style={styles.commentText}>Day la comments abcdefghijgsdfhakjfhjsdfjksdfhjksdhfksdhfiuaeyriudsjkfhjkdfh</Text>
                        <View style={styles.commentAction}>
                            <Text style={styles.action}>Like</Text>
                            <Text style={styles.action}>Reply</Text>
                        </View>
                    </View>
                </View>

            <View style={styles.commentInputContainer}>
                <View style={styles.commentInput}>
                    <TextInput
                            style={styles.input}
                            placeholder="Write a comment..."
                            placeholderTextColor="#B5B5B5" />
                    <IconSticker/>
                </View>
                <IconSend/>
            </View>
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
    header: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        width:width-25,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10,

    },
    title: {
        fontSize: 15,
        fontFamily:'Montserrat-Bold',
    },
    subtitle: {
        fontSize: 10,
        fontFamily:'Montserrat-Medium',
        color: "#6E747C",
        
    },
    commentContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'

    },
    comment:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        width:width-30,
        marginBottom:20
    },
    img:{
        width:40,
        height:40,
        borderColor:"rgba(255, 255, 255, 0.8)",
        borderWidth:1,
        borderRadius:50
    },
    content:{
        marginHorizontal:10,
        display:'flex',
        flexDirection:'column',
        width:width-85

    },
    commentHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'baseline'

    },
    commentAction:{
        display:'flex',
        flexDirection:'row'
    },
    name:{
        fontSize: 12,
        fontFamily:'Montserrat-Bold',
        color: "#22201E",

    },
    time:{
        fontSize: 10,
        fontFamily:'Montserrat-Medium',
        color: "#6E747C",
        marginLeft:20
    },
    commentText:{
        fontSize: 12,
        fontFamily:'Montserrat-Medium',
        color: "#22201E",
        marginVertical:3
    },
    action:{
        fontSize: 10,
        fontFamily:'Montserrat-SemiBold',
        color: "#22201E",
        marginRight:40

    },
    commentInputContainer:{
        display:'flex',
        flexDirection:'row',
        width:width-30,
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:30
    },
    commentInput:{
        backgroundColor:"rgba(255, 255, 255, 0.5)",
        width:width-73,
        height: 45,
        paddingHorizontal:7,
        borderRadius:10,
        borderWidth: 1.5,
        borderColor: "white",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',

    },
    input: {
        color:'#22201E',
        fontFamily:'Montserrat-Regular',
        fontSize:12
        
      },




    

})