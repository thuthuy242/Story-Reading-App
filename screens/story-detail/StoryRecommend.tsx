import React ,{useState,useEffect} from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { ItemStoryRecommend } from '../../components/item-group/story-detail/ItemStoryRecommend';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { LoadingRecommend } from '../../components/loading-group/story-detail/LoadingRecommend';

let { width } = Dimensions.get("window")

export default function ListStoryRecommend(props) {
	const [isLoading, setisLoading] = useState(true)
    const [recommendedStory, setRecommendedStory] = useState([]);

    async function fetchRecommendedStory() {
        await StoriesAPI.list({
            limit: 6
        })
        .then((response:any) => {
            setRecommendedStory(response.data || []);
        })
        .finally(() => {
            setisLoading(false);
        });
        
    }
    useEffect(() => {
        fetchRecommendedStory();
    }, [])
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Recommend For You</Text>
            <View style={styles.stories}>
                {isLoading?
                    <LoadingRecommend/>:
                    recommendedStory.length>0 && recommendedStory.map((v, i) => {
                        return(
                            <ItemStoryRecommend item = {v} key = {i}/>
                        )
                    })
                }
           
            </View>
        </View>
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