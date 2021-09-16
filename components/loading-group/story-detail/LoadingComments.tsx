import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconSend from '../../icon-group/IconSend';
import IconSticker from '../../icon-group/IconSticker';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingComments: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.title}>Comments</Text>
                <Text
                    style={styles.subtitle}
                > See more {'>'} </Text>
            </View>
            <SkeletonPlaceholder>
                <View style={styles.commentContainer}>
                    <View style={styles.comment}>
                        <View style={styles.img}/>
                        <View style={styles.content}>
                            <View style={styles.commentHeader}/>
                            <View style={styles.commentText}/>
                            <View style={styles.commentText1}/>
                            <View style={styles.commentAction}>
                                <View style={styles.action} />
                                <View style={styles.action} />
                            </View>
                        </View>
                        
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.commentContainer}>
                    <View style={styles.comment}>
                        <View style={styles.img}/>
                        <View style={styles.content}>
                            <View style={styles.commentHeader}/>
                            <View style={styles.commentText}/>
                            <View style={styles.commentText1}/>
                            <View style={styles.commentAction}>
                                <View style={styles.action} />
                                <View style={styles.action} />
                            </View>
                        </View>
                        
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.commentContainer}>
                    <View style={styles.comment}>
                        <View style={styles.img}/>
                        <View style={styles.content}>
                            <View style={styles.commentHeader}/>
                            <View style={styles.commentText}/>
                            <View style={styles.commentText1}/>
                            <View style={styles.commentAction}>
                                <View style={styles.action} />
                                <View style={styles.action} />
                            </View>
                        </View>
                        
                    </View>
                </View>
            </SkeletonPlaceholder>

                
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
        alignItems:'baseline', 
        width:80,
        height:15,
        borderRadius:3,
        marginBottom:5

    },
    commentAction:{
        display:'flex',
        flexDirection:'row',
        marginTop:5
    },
    commentText:{
        marginTop:3,
        width:width-85,
        borderRadius:3,
        height: 9,
        
    },
    commentText1:{
        marginTop:3,
        width:width-180,
        borderRadius:3,
        height: 9,
        
    },
    action:{
        marginRight:40,
        width:35,
        height:10,
        borderRadius:3

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