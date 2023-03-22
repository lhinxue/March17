import { DiamondOutlined, LabelOffOutlined, NotesOutlined, SettingsOutlined, TravelExploreOutlined } from "@mui/icons-material";

const MenuButtons = [
    {
        key: 'menu-setting',
        color: 'primary',
        icon: <SettingsOutlined fontSize="small" />
    },
    {
        key: 'menu-search',
        color: 'secondary',
        icon: <TravelExploreOutlined fontSize="small" />
    },
    {
        key: 'menu-allnote',
        color: 'error',
        icon: <NotesOutlined fontSize="small" />
    },
    {
        key: 'menu-important',
        color: 'warning',
        icon: <DiamondOutlined fontSize="small" />
    },
    {
        key: 'menu-untagged',
        color: 'success',
        icon: <LabelOffOutlined fontSize="small" />
    }
]

export {
    MenuButtons
}