import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Stacks
import HomeStack from './HomeStack';
import AnimacionesStack from './AnimacionesStack';

//Hooks
import { useAppSelector } from '../../app/hooks';

//Custom Componentes
import MenuBottom from './MenuBottom';

export type RootStackParams = {
    HomeStack: undefined;
    AnimacionesStack: undefined;
}

const Tab = createBottomTabNavigator<RootStackParams>();

export default function Tabs(){

    const theme = useAppSelector(({theme}) => theme.value);
    const language = useAppSelector(({language}) => language.value);

    return(
        <Tab.Navigator 
            initialRouteName='HomeStack' 
            tabBar={() => <MenuBottom/>}
            screenOptions={{
                headerStyle:{
                    backgroundColor: theme.headerBackgroundColor,
                },
                headerTitleStyle:{
                    color: theme.headerStackText,
                }
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStack} options={{title: language.home.screenTitle}}/>
            <Tab.Screen name='AnimacionesStack' component={AnimacionesStack} options={{title: language.animations.screenTitle}}/>
        </Tab.Navigator>
    );
}