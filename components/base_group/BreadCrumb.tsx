import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions } from "react-native"
import { useNavigation } from '@react-navigation/native';
let { width } = Dimensions.get("window")
interface BreadCrumbRoute {
    name: string;
}

interface Props {
    routes: any;
    navigation?: any

}

export const Breadcrumb: React.FC<Props> = ({ routes }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.title}> {routes.name}</Text>
            <Text
                style={styles.subtitle}
                onPress={() => navigation.navigate(routes.as)}
            > See more {'>'} </Text>
        </View>
        // <div className='coco-breadcrumb-wrap'>
        //     <a href='/' className='coco-breadcrumb-wrap--home'>
        //         <img src='/media/images/ic-home20px.svg' alt='cocolux' />
        //         <span>Trang chủ</span>
        //     </a>
        //     {
        //         routes.map((url, index) => (
        //             <Link key={index} href={url.href} as={url.as}>
        //                 <a className='coco-breadcrumb-wrap--first'>
        //                     {url.name}
        //                 </a>
        //             </Link>
        //         ))
        //     }
        // </div>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: width,
        marginBottom:10,

    },
    title: {
        width: width / 10 * 8,
        fontSize: 15,
        fontFamily:'Montserrat-Bold',
    },
    subtitle: {
        fontSize: 10,
        fontFamily:'Montserrat-Medium',
        color: "white",
        
    }
})