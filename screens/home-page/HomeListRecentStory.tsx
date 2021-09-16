import React ,{useState,useEffect} from 'react';
import { StyleSheet ,Dimensions} from 'react-native';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { Text, View } from '../../components/base_group/Themed';
import { Breadcrumb } from "../../components/base_group/BreadCrumb"
import { LoadingRecentStory } from '../../components/loading-group/LoadingRecentStory';
import { ItemRecentStory } from '../../components/item-group/home-page/ItemRecentStory';

let { width } = Dimensions.get("window");

export default function ListRecentStory(props){
    const [isLoading, setisLoading] = useState(true)
	const [recentStory, setrecentStory] = useState([]);

    async function fetchRecentStory() {
        await StoriesAPI.list({
            limit:4
        })
        .then((response:any) => {
            setrecentStory(response.data || []);
        })
        .finally(() => {
            setisLoading(false);
        });
        
    }
    useEffect(() =>{
        fetchRecentStory();
    }, [])


    return (
        <View style={styles.container}>
            <Breadcrumb routes={{ name: "Recently Read", as: "TabTwoScreen", navigation: props.navigation }}></Breadcrumb>
            <View style={styles.container1} >
                {isLoading?
                <LoadingRecentStory/>:
                recentStory.length>0 && recentStory.map((v,i) => {
                    return(
                        <ItemRecentStory item ={v} key ={i}/>
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
        flex: 1,
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',

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