import { useTheme } from '@emotion/react'
import { AddCircleTwoTone, ArrowCircleRightOutlined, ArrowCircleRightTwoTone, CloudSyncTwoTone, CloudUpload, CloudUploadOutlined, CloudUploadRounded, CloudUploadTwoTone, LockOpenTwoTone, UploadFileTwoTone, UploadTwoTone, VisibilityOffOutlined, VisibilityOffTwoTone, VisibilityOutlined, VisibilityTwoTone } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { Flip, Fade } from 'react-reveal'
import './LockScreen.css'

function LockScreen({ open, utility }) {

    const [fileName, setFileName] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)

    const onFileDrop = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateFile(e.dataTransfer.files[0])
        }
    }

    const onFileUpload = (e) => {
        validateFile(e.target.files[0])
    }

    const validateFile = (file) => {
        if (file.name.endsWith(".mar17")) {
            let name = file.name.replace(".mar17", "")
            setFileName(name)
        } else {
            utility.logMessage(2, "File Not Allowed", "You just uploaded a file with incorrect fomart. Only .mar17 file is accepted.", 5000)
        }
    }



    const theme = useTheme()

    return (
        <Fade>
            <div
                className={`LockScreen ${open ? "Open" : ""}`}
                onDragOver={onFileDrop}
                onDrop={onFileDrop}
            >
                <Typography
                    className='Title'
                    color="primary"
                    component='h1'
                >
                    <Flip left cascade>MARCH</Flip>
                    <Flip left cascade>17TH</Flip>
                </Typography>
                <Box
                    className="Content"
                    sx={{ '& input': { color: theme.palette.primary.main } }}
                >
                    <Fade delay={300}>
                        <TextField
                            color='primary'
                            className='Input'
                            focused
                            fullWidth
                            value={fileName === "" ? "Drag or Upload File" : fileName}
                            variant='outlined'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            size='small'
                                            color='primary'
                                            component="label"
                                        >
                                            <CloudUploadOutlined fontSize='small' />
                                            <input
                                                hidden
                                                accept='.mar17'
                                                type="file"
                                                onChange={onFileUpload}
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                readOnly: true
                            }}
                        />
                    </Fade>
                    {
                        fileName === "" ?
                            <Fade delay={300}>
                                <Typography className="CreateNew" fontSize={12} component="label" color='secondary'>
                                    or <u onClick={() => { }}>
                                        Create New
                                    </u>
                                </Typography>
                            </Fade>
                            :
                            <Fade>
                                <TextField
                                    className='Input'
                                    color='primary'
                                    focused
                                    fullWidth
                                    type={passwordVisible ? "text" : "password"}
                                    variant='outlined'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    size='small'
                                                    color='primary'
                                                    component="label"
                                                    onClick={() => setPasswordVisible(v => !v)}
                                                >
                                                    {
                                                        passwordVisible ?
                                                            <VisibilityOutlined fontSize='small' />
                                                            :
                                                            <VisibilityOffOutlined fontSize='small' />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <IconButton size='small' color='secondary'>
                                    <ArrowCircleRightOutlined fontSize='small' />
                                </IconButton>
                            </Fade>
                    }
                </Box>
            </div>
        </Fade>

    )
}

export default LockScreen
