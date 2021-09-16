import React ,{useState,useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { Text, View } from '../../components/base_group/Themed';
import { Breadcrumb } from "../../components/base_group/BreadCrumb"
import { LoadingMostViewedStory } from '../../components/loading-group/LoadingMostViewedStory';
import { ItemMostViewed } from '../../components/item-group/home-page/ItemMostViewed';

let { width } = Dimensions.get("window");

export default function ListMostViewedStory(props){
    const [isLoading, setisLoading] = useState(true)
	const [mostViewedStory, setMostViewedStory] = useState([]);

    async function fetchMostViewedStory() {
        await StoriesAPI.list({
            limit:6
        })
        .then((response:any) => {
            setMostViewedStory(response.data || []);
        })
        .finally(() => {
            setisLoading(false);
        });
        
    }
    useEffect(() =>{
        fetchMostViewedStory();
    }, [])


    return (
        <View style={styles.container}>
            <Breadcrumb routes={{ name: "Most Viewed", as: "TabTwoScreen", navigation: props.navigation }}></Breadcrumb>
            <View style={styles.container1} >
                {isLoading?
                <LoadingMostViewedStory/>:
                mostViewedStory.length>0 && mostViewedStory.map((v,i) => {
                    return(
                        <ItemMostViewed item ={v} key ={i}/>
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
        marginTop:20,
        marginBottom:90
    },
    container1: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: width,
        alignItems: "center",
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        display: 'flex',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginTop:20,
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

});