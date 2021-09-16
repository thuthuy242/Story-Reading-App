import React ,{useState,useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { Text, View } from '../../components/base_group/Themed';
import { Breadcrumb } from "../../components/base_group/BreadCrumb"
import { LoadingRecommendedStory } from '../../components/loading-group/LoadingRecommendedStory';
import { ItemRecommendedStory} from '../../components/item-group/home-page/ItemRecommendedStory';

let { width } = Dimensions.get("window");

export default function ListRecommendedStory(props){
    const [isLoading, setisLoading] = useState(true);
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
        <View style={styles.container}>
            <Breadcrumb routes={{ name: "Recommended", as: "TabTwoScreen", navigation: props.navigation }}></Breadcrumb>
            <View style={styles.container1} >
                {isLoading?
                    <LoadingRecommendedStory/>:
                    recommendedStory.length>0 && recommendedStory.map((v, i) => {
                        return(
                            <ItemRecommendedStory item = {v} key = {i}/>
                        )
                    })
                }
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        marginLeft:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    container1: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: width,
        alignItems: "center",
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',

    },

});