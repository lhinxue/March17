import { AddBoxTwoTone, AddCircleTwoTone, AddOutlined, AutoAwesomeOutlined, AutoModeOutlined, BrowserUpdatedOutlined, DiamondOutlined, DownloadingOutlined, EditTwoTone, FileDownloadOutlined, FindInPageTwoTone, LabelOffOutlined, LanguageOutlined, LanguageTwoTone, LibraryAddTwoTone, ManageSearchOutlined, NightsStayOutlined, NotesOutlined, PlaylistAddTwoTone, PostAddOutlined, Rotate90DegreesCwOutlined, SearchOutlined, SettingsApplicationsOutlined, SettingsOutlined, SettingsTwoTone, TravelExploreOutlined } from "@mui/icons-material"
import { Box, Button, IconButton, Tab, Tabs, ToggleButton, Typography } from "@mui/material"
import { Fade, Flip, Slide } from "react-reveal"
import "./Application.css"
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { MenuButtons } from "../../configurations/Components";
import March7th from './src/img/March7th.jpg'

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



    return (
        <div
            className="Application"
        >

            <div className="Header" style={{
                borderColor: theme.palette.primary.light
            }} >

                <Typography component={'div'} className="Left" color={"primary"}
                    onClick={() => { }}
                >
                    <Fade>
                        <img src={March7th} alt="" style={{
                            borderColor: theme.palette.primary.main
                        }} />
                    </Fade>
                    <Flip left cascade>
                        叁月拾柒
                    </Flip>
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
                                    selected={mode === v.key}
                                    color={v.color}
                                    fullWidth
                                    onClick={() => setMode(v.key)}
                                    sx={{ background: mode === v.key ? theme.palette[v.color].light + "55 !important" : theme.palette[v.color].light + "11 !important" }}
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
                                background: theme.palette.secondary.light + "11"
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
                <div>

                    <Typography>
                        <strong>Marhs三月</strong>七号liuliuliu
                    </Typography>

                </div>
            </div>




        </div >
    )
}


export default Application