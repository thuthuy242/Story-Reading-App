/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, Octicons, AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomePage from '../screens/home-page';
import SearchPage from "../screens/search"
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList, TabFiveParamList } from '../types';
import HomeIcon from "../components/icon-group/IconHomePage";
import SearchIcon from "../components/icon-group/IconSearch";
import BookIcon from "../components/icon-group/IconBook"
import GenreIcon from "../components/icon-group/IconGenre"
import IconProfile from "../components/icon-group/IconProfile"
import BookCase from '../screens/book-case';
import Profile from '../screens/profile-screen';
import MyList from '../screens/my-list-screen';
import ResumeReadingScreen from '../screens/my-list-screen/ResumeReadingScreen';
import SubcribedScreen from '../screens/my-list-screen/SubcribedScreen';
import FavoritedScreen from '../screens/my-list-screen/FavoritedScreen';
import StoryDetail from '../screens/story-detail/StoryDetail';
import Login from '../screens/login-register/Login';
import Register from '../screens/login-register/Register';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();
function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"

            tabBarOptions={{
                tabStyle: {
                    marginTop: 5,

                }, labelStyle: { marginBottom: 0 }, activeTintColor: Colors[colorScheme].tint, style:{ 
                    elevation: 0,
                    height: 85, borderTopLeftRadius: 25, borderTopRightRadius: 25,
                    shadowOffset: {
                        width: 0, height: 0 // for iOS
                    },
                    position: "absolute",
                    paddingBottom: Platform.OS === "ios" ? 0 : 10, paddingTop: Platform.OS === "ios" ? 0 : 10
                },  
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ({ color, focused }) => <HomeIcon active={focused} colorBack={Colors[colorScheme].primary}></HomeIcon>,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <SearchIcon active={focused} colorBack={Colors[colorScheme].primary} />,
                }}
            />
            <BottomTab.Screen
                name="Discovery"
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <GenreIcon active={focused} colorBack={Colors[colorScheme].primary} />,
                }}
            />
            <BottomTab.Screen
                name="Menu"
                component={TabFourNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <BookIcon active={focused} colorBack={Colors[colorScheme].primary} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={TabFiveNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <IconProfile active={focused} colorBack={Colors[colorScheme].primary} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: {name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//     return <Ionicons size={30} style={{ marginBottom: 0, fontWeight: "bold" }} {...props} />;
// }
// function TabBarIcon1(props: {name: React.ComponentProps<typeof Octicons>['name']; color: string }) {
//     return <Octicons size={30} style={{ marginBottom: 0, fontWeight: "bold" }} {...props} />;
// }
// function TabBarIcon2(props: {name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
//     return <AntDesign size={30} style={{ marginBottom: 0, fontWeight: "bold" }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
    return (
        <TabOneStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={BottomTabNavigator}
                options={{ headerTitle: 'hih' }}
            />
            <TabOneStack.Screen
                name="StoryDetail"
                component={StoryDetail}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={SearchPage}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
/**
 * Tab three screen
 */
const TabThreeStack = createStackNavigator<TabThreeParamList>();
function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <TabThreeStack.Screen
                name="TabThreeScreen"
                component={BookCase}
                options={{ headerTitle: 'Tab Three Title' }}
            />
        </TabThreeStack.Navigator>
    );
}
/**
 * Tab four screen
 */
const TabFourStack = createStackNavigator<TabFourParamList>();
function TabFourNavigator() {
    return (        
        <TabFourStack.Navigator screenOptions={{
            headerShown: false,
            gestureDirection: 'horizontal',
        }}>
            <TabFourStack.Screen
                name="TabFourScreen"
                component={MyList}
                options={{ headerTitle: 'Tab Four Title' }}
            />
            <TabFourStack.Screen
                name="ResumeReading"
                component={ResumeReadingScreen}
                />
            
            </TabFourStack.Navigator>
    );
}

// /**
// * Tab five screen
// */
const TabFiveStack = createStackNavigator<TabFiveParamList>();
function TabFiveNavigator() {
    return (
        <TabFiveStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <TabFiveStack.Screen
                name="TabFiveScreen"
                component={Profile}
                options={{ headerTitle: 'Tab Five Title' }}
            />
            <TabFiveStack.Screen
                name="LoginScreen"
                component={Login}
            />
            
            <TabFiveStack.Screen
                name="RegisterScreen"
                component={Register}
            />


        
        </TabFiveStack.Navigator>
    );
}

