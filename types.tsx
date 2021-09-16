/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    Splash: {
        name: string,
        component: object
    };
	Login:undefined,
};

export type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Discovery: undefined;
    Menu: undefined;
    Profile: undefined
};

export type TabOneParamList = {
    TabOneScreen: undefined;
    StoryDetail: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};
export type TabThreeParamList = {
    TabThreeScreen: undefined;
};
export type TabFourParamList = {
    TabFourScreen: undefined;
    ResumeReading: undefined;
    abc: undefined;
};
export type TabFiveParamList = {
    TabFiveScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
};
export declare type Theme = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
};
