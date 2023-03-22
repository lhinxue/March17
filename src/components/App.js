
import { Button, createTheme, ThemeProvider } from '@mui/material';
import LockScreen from './LockScreen/LockScreen';
import Messenger from './Messenger/Messenger';
import { useState } from 'react';
import Application from './Application/Application';
import fft from '../fonts/DINosaur-Black.otf'
import Fonts from './Fonts/Fonts';


function App() {

    const theme = createTheme({
        typography: {
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
            <Fonts fonts={['ENL', 'ENN', 'ENB', 'CNL', 'CNN', 'CNB']} onLoadComplete={() => setFontLoaded(true)} />
        </ThemeProvider>

    );
}

export default App;
