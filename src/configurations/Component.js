import { DiamondOutlined, LabelOffOutlined, NotesOutlined, SettingsOutlined, TravelExploreOutlined } from "@mui/icons-material";

const MenuButtons = [
    {
        key: 'menu-setting',
        color: 'primary',
        icon: <SettingsOutlined fontSize="small" />
    },
    {
        key: 'menu-search',
        color: 'orange',
        icon: <TravelExploreOutlined fontSize="small" />
    },
    {
        key: 'menu-allnote',
        color: 'red',
        icon: <NotesOutlined fontSize="small" />
    },
    {
        key: 'menu-untagged',
        color: 'info',
        icon: <LabelOffOutlined fontSize="small" />
    }
]

const MATERIAL_THEME = {
    palette: {
        mode: 'light',
        primary: {
            main: '#767676',
            contrastText: '#ffffff',
            light: '#a6a6a6',
            dark: '#484848',
        },
        secondary: {
            main: '#448ce9',
            contrastText: '#ffffff',
            light: '#8ec4ff',
            dark: '#2d64a4',
        },
        tertiary: {
            main: '#e944df',
            contrastText: '#ffffff',
            light: '#ff8efd',
            dark: '#a42da0',
        },
        red: {
            main: '#e9444a',
            contrastText: '#ffffff',
            light: '#ff8e97',
            dark: '#a42d34',
        },
        orange: {
            main: '#e98b44',
            contrastText: '#ffffff',
            light: '#ffb98e',
            dark: '#a45d2d',
        },
        blue: {
            main: '#5144e9',
            contrastText: '#ffffff',
            light: '#918eff',
            dark: '#332da4',
        },
        info: {
            main: '#767676',
            contrastText: '#ffffff',
            light: '#a6a6a6',
            dark: '#484848',
        },
    },
    typography: {
        fontWeightLight: 400,
        fontWeightMedium: 400,
        fontWeightBold: 400,
        fontFamily: `ENN, CNN, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'`
    }
}

export {
    MenuButtons,
    MATERIAL_THEME
}