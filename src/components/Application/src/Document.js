import { useTheme } from "@emotion/react"
import { AddCircleOutline, AddCircleOutlined, AddCircleOutlineOutlined, AddOutlined, AutoAwesomeOutlined, AutoFixHighOutlined, BubbleChartOutlined, ExpandCircleDownOutlined, LabelOutlined, MapsUgcOutlined, PostAddOutlined } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardActions, Chip, ClickAwayListener, IconButton, Input, InputAdornment, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { Fade, Flip, Slide, Zoom } from "react-reveal"
import './Document.css'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function Document({ title, text, tags = ["444", "666",
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',] }) {
    const theme = useTheme()
    const [personName, setPersonName] = useState([]);
    const [active, setActive] = useState(false)
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const ref = useRef()

    return (
        <Card className="Document"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            ref={ref}
            elevation={0} style={{
                borderColor: theme.palette.primary.light
            }}>
            <Typography sx={{ margin: '10px' }}>
                {title}
            </Typography>
            <Typography sx={{ margin: '10px' }} fontSize={12}>
                {text}
            </Typography>


            <Box className="Actions">
                {tags.map((value) => (
                    <Chip key={value} label={value} size={'small'} variant="outlined" sx={{ fontSize: '12px', height: '20px' }} />
                ))}
            </Box>
            <IconButton className={`Edit ${active ? "Active" : ""}`} size="small" >
                <AutoFixHighOutlined fontSize="small" />
            </IconButton>



        </Card>

    )
}

function DocumentAdd() {
    const theme = useTheme()
    return (
        <Card className="Document"
            elevation={0}

            sx={{
                border: '1px solid ' + theme.palette.secondary.light
            }}>
            <Button fullWidth color="secondary"
                sx={{
                    padding: '10px 0',
                    backgroundColor: theme.palette.secondary.light + '22 !important'
                }}
                startIcon={<PostAddOutlined />}
            >
                <Typography textTransform={'none'} fontSize={14}>
                    Create New Note
                </Typography>

            </Button>
        </Card>
    )
}

export default Document
export { DocumentAdd }