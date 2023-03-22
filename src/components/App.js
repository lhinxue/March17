
import { Button, createTheme, ThemeProvider } from '@mui/material';
import LockScreen from './LockScreen/LockScreen';
import Messenger from './Messenger/Messenger';
import { useState } from 'react';
import Application from './Application/Application';
import Fonts from './Fonts/Fonts';


function App() {

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#e944df',
                contrastText: '#ffffff',
                light: '#ff8efd',
                dark: '#a42da0',
            },
            secondary: {
                main: '#448ce9',
                contrastText: '#ffffff',
                light: '#8ec4ff',
                dark: '#2d64a4',
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
    })

    const [messengerControl, setMessengerControl] = useState({
        open: false,
        severity: 0,
        title: "",
        text: ""
    })

    const [fontLoaded, setFontLoaded] = useState(false)



    const logMessage = (severity, title, text, duration) => {
        setMessengerControl({
            open: true,
            severity: severity,
            title: title,
            text: text
        })
        if (duration) {
            setTimeout(() => {
                closeMessenger()
            }, duration);
        }
    }

    const closeMessenger = () => {
        setMessengerControl((v) => ({
            ...v,
            open: false
        }))
    }
    const [lockScreen, setLockScreen] = useState(true)

    return (
        <ThemeProvider theme={theme}>
            {
                fontLoaded ?
                    <>
                        {
                            lockScreen ? <LockScreen utility={{ logMessage, closeMessenger }} /> : <Application />
                        }

                        <Messenger
                            open={messengerControl.open}
                            severity={messengerControl.severity}
                            title={messengerControl.title}
                            text={messengerControl.text}
                        />
                        <Button sx={{ zIndex: 100, marginLeft: 90, marginTop: 80 }} onClick={() => {
                            setLockScreen(v => !v)
                        }}>LockScreen Switch</Button>
                    </> : <div>Loading</div>
            }
            <Fonts onLoadComplete={() => setFontLoaded(true)} />
        </ThemeProvider>

    );
}

export default App;
