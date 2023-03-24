import { AddBoxTwoTone, AddCircleTwoTone, AddOutlined, AutoAwesomeOutlined, AutoModeOutlined, BrowserUpdatedOutlined, DiamondOutlined, DownloadingOutlined, EditTwoTone, FileDownloadOutlined, FindInPageTwoTone, LabelOffOutlined, LanguageOutlined, LanguageTwoTone, LibraryAddTwoTone, ManageSearchOutlined, NightsStayOutlined, NotesOutlined, PlaylistAddTwoTone, PostAddOutlined, Rotate90DegreesCwOutlined, SearchOutlined, SettingsApplicationsOutlined, SettingsOutlined, SettingsTwoTone, TravelExploreOutlined } from "@mui/icons-material"
import { Box, Button, IconButton, Paper, Tab, Tabs, ToggleButton, Typography } from "@mui/material"
import { Fade, Flip, Slide, Zoom } from "react-reveal"
import "./Application.css"
import { memo, useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { MenuButtons } from "../../configurations/Component";
import Logo from "../Logo/Logo";
import Masonry from "./src/Masonry";
function Application({
    tags = ["Company", "Study", "Family"],
    utility
}) {
    const [mode, setMode] = useState("")
    const theme = useTheme()

    const tagMode = (mode) => {
        if (mode.startsWith("tag-")) {
            mode = mode.replace("tag-", "")
            return mode
        } else {
            return false
        }
    }

    const [logoActive, setLogoActive] = useState(false)

    const settingColumns = useCallback(() => {
        if (window.innerWidth >= 1400) return 4
        if (window.innerWidth >= 800) return 3
        if (window.innerWidth >= 500) return 2
        return 1
    }, [])

    const [column, setColumn] = useState(() => settingColumns())

    useEffect(() => {
        window.addEventListener('resize', () => setColumn(() => settingColumns()))

        return window.removeEventListener('resize', () => setColumn(() => settingColumns()))
    }, [setColumn, settingColumns])



    return (
        <div
            className="Application"
        >
            <div className="Header" style={{
                borderColor: theme.palette.primary.light
            }} >
                <Typography component={'div'} className="Left" color={"primary"}
                    onClick={() => { }}
                    onMouseEnter={() => setLogoActive(true)}
                    onMouseLeave={() => setLogoActive(false)}
                >
                    <Fade>
                        <Logo />
                    </Fade>
                    <div>
                        <Fade>
                            MARCH 7TH
                        </Fade>
                    </div>
                </Typography>
                <Fade>
                    <div className="Right">
                        <IconButton size="small" color="primary">
                            <DownloadingOutlined fontSize="small" sx={{ transform: "scaleX(-1)" }} />
                        </IconButton>
                    </div>
                </Fade>
            </div>
            <div className="Content">
                <div className="Tags">
                    {
                        MenuButtons.map(
                            (v) =>
                                <Button
                                    color={mode === v.key ? "secondary" : "primary"}
                                    fullWidth
                                    onClick={() => setMode(v.key)}
                                    sx={{
                                        background: mode === v.key ?
                                            theme.palette.secondary.light + "55 !important" :
                                            theme.palette.primary.light + "11 !important"
                                    }}
                                >
                                    {v.icon}
                                    <Flip left cascade>
                                        {v.key}
                                    </Flip>
                                </Button>
                        )
                    }
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        scrollButtons={false}
                        textColor="secondary"
                        value={tagMode(mode)}
                        onChange={(e, v) => setMode("tag-" + v)}
                        sx={{
                            "& .MuiTabs-indicator": {
                                display: 'none'
                            },
                            "& .Tag.Mui-selected": {
                                background: theme.palette.secondary.light + "22"
                            }
                        }}
                    >
                        {tags.map((tag) =>
                            <Tab
                                className="Tag"
                                value={tag}
                                key={tag}
                                label={<Flip left cascade>{tag}</Flip>}
                            />
                        )}
                    </Tabs>
                </div>
                <Masonry />
            </div>
        </div>
    )
}


const Document = memo(({ value }) => {
    <div className="Document">
        {
            Array.from(Array(value).keys()).map(() => <p>pupuoio</p>)
        }
    </div>
})



export default Application