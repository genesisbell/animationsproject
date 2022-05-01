
//Main Colors
// Light
// #FBF8F1
// #F7ECDE
// #E9DAC1
// #54BAB9
// Dark
// #041C32
// #141E61
// #787A91
// #EEEEEE

const sharedColors = {
    textActive: '#54BAB9',
    textInactive: '#787A91',

}

const Colors = {
    lightTheme:{
        mainBackgroundColor: '#EEEEEE',
        headerBackgroundColor: '#54BAB9',
        headerStackText: '#EEEEEE',
        menuBottomBackgroundColor: '#FFFFFF',
        active: '#54BAB9',
        inactive: '#787A91',
        text: '#252525',
        ...sharedColors,
    },

    darkTheme:{
        mainBackgroundColor: '#181818',
        headerBackgroundColor: '#041C32',
        headerStackText: '#DFDFDF',
        menuBottomBackgroundColor: '#252525',
        active: '#54BAB9',
        inactive: '#787a91',
        text: '#DFDFDF',
        ...sharedColors,
    },

    mcDonaldsTheme:{
        mainBackgroundColor: 'yellow',
        headerBackgroundColor: 'red',
        headerStackText: 'yellow',
        menuBottomBackgroundColor: 'red',
        active: 'yellow',
        inactive: '#787A91',
        text: 'red',
        ...sharedColors,
    },
}

export default Colors;
