import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Colors from '../../assets/ColorsLibrary';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: Colors.lightTheme
  },
  reducers: {
    setLightTheme: state => {
        state.value = Colors.lightTheme
        
    },
    setDarkTheme : state => {
        state.value = Colors.darkTheme
    },
    setMCTheme : state => {
        state.value = Colors.mcDonaldsTheme
    },
  }
});

export const { setLightTheme, setDarkTheme, setMCTheme } = themeSlice.actions;

export default themeSlice.reducer;

export function dispatchThemeSelection(value:string, dispatch:(arg0: PayloadAction)=>void){
  switch (value) {
    case undefined:
        dispatch(setDarkTheme());                
        break;
    case 'lightTheme':
        dispatch(setLightTheme());                
        break;
    case 'darkTheme':
        dispatch(setDarkTheme());                
        break;
    case 'mcDonaldsTheme':
        dispatch(setMCTheme());                
        break;        
    default:
        break;
}


}