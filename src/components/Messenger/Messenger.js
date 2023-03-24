import { Alert, AlertTitle, Backdrop, Snackbar } from "@mui/material";

function Messenger({
    open,
    severity = 0,
    title = "",
    text = ""
}) {
    const messageType = [
        'info',
        'success',
        'warning',
        'error'
    ]

    return (
        // <Backdrop
        //     open
        //     sx={{ backgroundColor: "#FFFFFFCC" }}
        // >
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            sx={{ '& .msg': { boxShadow: '0px 0px 11px 0px rgb(70 70 70 / 10%)', width: '100%' } }}
        >
            <Alert severity={messageType[severity]}>
                <AlertTitle>
                    {title}
                </AlertTitle>
                {text}
            </Alert>
        </Snackbar>
    )
}

const DEFAULT_MESSENGER = {
    open: false,
    severity: 0,
    title: "",
    text: ""
}

export default Messenger
export {
    DEFAULT_MESSENGER
}