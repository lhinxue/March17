
import { Button, createTheme, ThemeProvider } from '@mui/material';
import LockScreen from './LockScreen/LockScreen';
import Messenger, { DEFAULT_MESSENGER } from './Messenger/Messenger';
import { useState } from 'react';
import Application from './Application/Application';
import Fonts from './Fonts/Fonts';
import { MATERIAL_THEME } from '../configurations/Component';


function App() {

    const theme = createTheme(MATERIAL_THEME)

    const [messengerControl, setMessengerControl] = useState(DEFAULT_MESSENGER)

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
