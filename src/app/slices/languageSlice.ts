import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import languages from '../../assets/translations/index';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: languages.en
  },
  reducers: {
    setEnglishLanguage : state => {
        state.value = languages.en
    },
    setSpanishLanguage: state => {
        state.value = languages.es
    },
  }
});

export const { setEnglishLanguage, setSpanishLanguage } = languageSlice.actions;

export default languageSlice.reducer;

export function dispatchSelectedLanguage(value:string, dispatch:(arg0:PayloadAction)=>void){
  switch (value) {
    case undefined:
        dispatch(setEnglishLanguage());                
        break;
    
    case 'en':
        dispatch(setEnglishLanguage());
        break;
    
    case 'es':
        dispatch(setSpanishLanguage());
        break;        
    default:
        break;
  }
}