import React ,{useState,useEffect} from 'react';
import { StyleSheet, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/base_group/Themed';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { LoadingComments } from '../../components/loading-group/story-detail/LoadingComments';
import { LoadingRecommend } from '../../components/loading-group/story-detail/LoadingRecommend';
import { LinearGradient } from 'expo-linear-gradient';
import IconLike from '../../components/icon-group/IconLike';
import IconSubcribe from '../../components/icon-group/IconSubcribe';
import IconChapter from '../../components/icon-group/IconChapterStory';
import { LoadingInfo } from '../../components/loading-group/story-detail/LoadingInfo';
import { StoryInfo } from '../../components/item-group/story-detail/StoryInfo';
import { Story } from '../../helpers/models/story.model';
import { LoadingGenres } from '../../components/loading-group/story-detail/LoadingGenres';
import { StoryGenres } from './StoryGenres';
import ListStoryRecommend from './StoryRecommend';

const background = require("../../assets/images/background.png");
let { width, height } = Dimensions.get("window")

export default function StoryDetail({route,props}) {
    const [isLoading, setisLoading] = useState(true)
    const [detail, setDetail] = useState<any>({} as any);
    
    const  {itemId}  = route.params;
    
    async function fetchStory() {
        await StoriesAPI.getOne({
            id: itemId
        })
        .then((response:any) => {
            setDetail(response.data);
            console.log(response);
            
        }).finally(() => {
            setisLoading(false);
        });
        
    }
    useEffect(() => {
        fetchStory()
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} source={background} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.wrapper}>
                                        
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {isLoading?
                        <LoadingInfo/>:
                        
                        <StoryInfo story={detail}/>
                        
                        }
                        {isLoading?
                        <LoadingGenres/>:
                        <StoryGenres/>}
            
                        
                        <LoadingComments/>
                        <ListStoryRecommend/>
             
                    </ScrollView >
                    <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)',
                                            'rgba(255, 255, 255, 255)', 'rgba(255, 255, 255, 255)']}
                        style={styles.storyDetailNav}>
                                <View style={styles.navContainer}>
                                    <View style={styles.actionContainer}>
                                        <IconLike/>
                                        <Text style={styles.actionText}>Like</Text>
                                    </View>
                                    <View style={styles.actionContainer}>
                                        <IconSubcribe/>
                                        <Text style={styles.actionText}>Subcribe</Text>
                                    </View>
                                    <View style={styles.actionContainer}>
                                        <IconChapter/>
                                        <Text style={styles.actionText}>Chapters</Text>
                                    </View>
                                </View>
                                
                                <TouchableOpacity style={styles.btnRead} activeOpacity={0.5}>
                                    <Text style={styles.readText}>Reading Now</Text>
                                </TouchableOpacity>
                           

                    </LinearGradient>
                    
                </View>
            </ImageBackground>
            
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        flexDirection:'column'
    },

    container: {
        width: width,
        height: height,
    },
    storyDetailNav:{
        width:width,
        height:80,
        position:'absolute',
        bottom:0,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
        
        
    },

    navContainer:{
        backgroundColor: "rgba(255, 255, 255, 0)",
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        

    },
    actionContainer:{
        backgroundColor: "rgba(255, 255, 255, 0)",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:8

    },
    btnRead:{
        height:50,
        width:165,
        backgroundColor:'#FF845E',
        borderRadius:23,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#6E747C',
        fontFamily:'Montserrat-Medium',
        fontSize:12
    },
    readText:{
        color:'white',
        fontFamily:'Montserrat-Bold',
        fontSize:18
    }


});
