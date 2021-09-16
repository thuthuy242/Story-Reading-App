import React ,{useState,useEffect} from 'react';
import { StyleSheet ,ScrollView,Dimensions} from 'react-native';
import {apiUrl} from '../../config/vars'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/base_group/Themed';
import { Breadcrumb } from "../../components/base_group/BreadCrumb"
import { LoadingStory } from '../../components/loading-group/LoadingStory';
import { StoriesAPI } from '../../helpers/services/stories-api';
import { UpdatedStory } from '../../components/item-group/home-page/updateStory';
import { ItemLastestUpdate } from '../../components/item-group/home-page/ItemLastestUpdate';
let { width } = Dimensions.get("window");
export default function ListHotStory(props) {
	const [isLoading, setisLoading] = useState(true)
	const [lastestStory, setlastestStory] = useState([])
	async function fetchLastedStory(){
		await StoriesAPI.list({
			limit:10
		})
		.then((response: any) => {
			setlastestStory(response.data || []);
		}).finally(() => {
			setisLoading(false);
		});
	}
	useEffect(() => {
		fetchLastedStory()
	}, [])
    return (
        <View style={styles.container}>
            <Breadcrumb routes={{ name: "Lastest Updated", as: "TabTwoScreen", navigation: props.navigation }}></Breadcrumb>
			
			<View style={styles.container1}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {isLoading? 
                <LoadingStory></LoadingStory>:
                lastestStory.length>0 && lastestStory.map((v,i)=>{
                    return(
                        //  <UpdatedStory item={v} key={i}></UpdatedStory>
                        <ItemLastestUpdate  item={v} key={i}/>
                        
                        
                    )
                })    
                }
                </ScrollView>
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
    },
	container1: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: width

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