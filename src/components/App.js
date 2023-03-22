
import { Button, createTheme, ThemeProvider } from '@mui/material';
import LockScreen from './LockScreen/LockScreen';
import DINosaur from '../font/DINosaur.otf'
import Messenger from './Messenger/Messenger';
import { useState } from 'react';
import Application from './Application/Application';
const DINosaurBook = {
    fontFamily: 'DINosaur', fontWeight: 'normal', src: `url(${DINosaur}) format('otf')`
}
function App() {

    const theme = createTheme({
        typography: {
            fontFamily: `DINosaur, TsangerXuanSan, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'`
        }
    })

    const [messengerControl, setMessengerControl] = useState({
        open: false,
        severity: 0,
        title: "",
        text: ""
    })

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
        </ThemeProvider>

    );
}

export default App;
