import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import IconRatingFull from '../../icon-group/IconRatingFull'
import IconMore from '../../icon-group/IconMore';
import { Story } from '../../../helpers/models/story.model';

let { width } = Dimensions.get("window")


export const StoryInfo: React.FC<any> = (props) => {

    const navigation = useNavigation();
    let rating = props.story.reaction.ratingCount;
    let view = props.story.reaction.viewCount;
    let like = props.story.reaction.likeCount;
    let comment = props.story.reaction.commentCount;


    return (
        <View style={styles.container} >
            <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
            <View style= {styles.titleContainer}>
                <Text style={styles.title}>{props.story.title}</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.author}>Author abcd</Text>
                <View style={styles.dot}></View>
                <Text style={styles.status}>Ongoing</Text>
            </View>
            <View style={styles.ratingContainer}>
                <IconRatingFull/>
                <IconRatingFull/>
                <IconRatingFull/>
                <IconRatingFull/>
                <IconRatingFull/>
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View  style={styles.info}>
                <View>
                    <View style={styles.subInfo}>
                        <Text style={styles.number}>{view}</Text>
                        <Text style={styles.reactionText}>Views</Text>
                    </View>
                </View>
                <View style={styles.separator}></View>
                <View>
                    <View style={styles.subInfo}>
                        <Text style={styles.number}>{like}</Text>
                        <Text style={styles.reactionText}>Likes</Text>
                    </View>
                </View>
                <View style={styles.separator}></View>
                <View>
                    <View style={styles.subInfo}>
                        <Text style={styles.number}>124M</Text>
                        <Text style={styles.reactionText}>Subcribes</Text>
                    </View>
                </View>
                <View style={styles.separator}></View>
                <View>
                    <View style={styles.subInfo}>
                        <Text style={styles.number}>{comment}</Text>
                        <Text style={styles.reactionText}>Comments</Text>
                    </View>
                </View>

            </View>

            <View style={styles.sumContainer} >
            <Text style={styles.header}>Summary</Text>
            <Text style={styles.text} numberOfLines={4} ellipsizeMode='tail'>{props.story.content}</Text>     
            <View style={styles.more}>
                <Text style={styles.moreText}>More</Text>
                <IconMore/>
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
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',

    },

    img:{
        width:170,
        height:230,
        borderRadius:20,

    },
    
    titleContainer:{
        width:width-50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10

    },

    title: {
        fontSize: 16,
        color:'#22201E',
        fontFamily:'Montserrat-Bold',
        textTransform:'uppercase'

    },

    subtitle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:8
    },

    author:{
        fontFamily:'Montserrat-SemiBold',
        color:'#6E747C',
        fontSize:14,
    },
    dot:{
        width:4,
        height:4,
        borderRadius:50,
        backgroundColor:'#2BA5FF',
        marginHorizontal:10
    },
    status:{
        fontFamily:'Montserrat-Medium',
        color:'#6E747C',
        fontSize:14
    },
    ratingContainer:{
        display:'flex',
        width:width/2.8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ratingText:{
        fontFamily:'Montserrat-SemiBold',
        color:'#6E747C',
        fontSize:14,
        marginLeft:5
    },
    info:{
        flexDirection:'row',
        height:62,
        display:'flex',
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderColor:'white',
        borderWidth:2,
        marginTop:10,
        paddingHorizontal:10
    },
    separator:{
        width:2,
        backgroundColor: "rgba(255, 255, 255, 1)",
        height:40,
        borderRadius:10,
    },
    subInfo:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    number:{
        color:'#2BA5FF',
        fontFamily:'Montserrat-Bold',
        fontSize:14
    },
    reactionText:{
        color:'#6E747C',
        fontFamily:'Montserrat-Medium',
        fontSize:14
    },
    sumContainer: {
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
    text:{
        fontFamily:'Montserrat-Regular',
        fontSize:12,
        color: '#22201E',

    },
    more:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:width-30,
        marginTop:3
    },
    moreText:{
        fontFamily:'Montserrat-Medium',
        fontSize:11,
        color: '#6E747C',
        marginRight:4

    },
    genreContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        flexDirection:'column',
        display: 'flex',
        marginHorizontal:15,
        marginTop:20,
        justifyContent:'flex-start',
        alignItems:'flex-start',

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


})