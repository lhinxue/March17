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

export {
    MenuButtons
}