import React from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    setDarkTheme,
    setLightTheme,
    setMCTheme,
} from '../../app/slices/themeSlice';

//Libraries
import Colors from '../../assets/ColorsLibrary';
import { OtherIcons } from '../../assets/IconLibrary';

export default function ThemeSelection(){

    const dispatch = useAppDispatch();
    const theme = useAppSelector(({theme}) => theme.value);
    const language = useAppSelector(({language}) => language.value);

    async function saveThemeSelection(setTheme:any, themeName:string){
        try{
            dispatch(setTheme());
            await AsyncStorage.setItem('theme', themeName);
       }catch(e){
           console.error('Error saving theme selection', e);
       }
    }

    return(
        <View style={styles.mainCont}>
            <Text style={[styles.titleText, {color: theme.text}]}>{language.theme.selecTheme}</Text>
            <View style={styles.screenCont}>
                <TouchableOpacity onPress={() => saveThemeSelection(setLightTheme, 'lightTheme')}>
                    <SvgXml xml={OtherIcons.phone(120, Colors.lightTheme.mainBackgroundColor, Colors.lightTheme.text)}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => saveThemeSelection(setDarkTheme, 'darkTheme')}>
                    <SvgXml xml={OtherIcons.phone(120, Colors.darkTheme.mainBackgroundColor, Colors.darkTheme.text)}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => saveThemeSelection(setMCTheme, 'mcDonaldsTheme')}>
                    <SvgXml xml={OtherIcons.phone(120, Colors.mcDonaldsTheme.mainBackgroundColor, Colors.mcDonaldsTheme.text)}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainCont:{
        marginVertical: 20,
    },
    titleText:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 30,
    },
    screenCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})