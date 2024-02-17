import { Box } from "@mui/material";
import React, { Component } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'


class Tabbar extends Component {


    render() {
        return (
            <TabContext value={this.props.currentTab}>
                <Box sx={{ width: "75%", height: "100%" }} >
                    <Tabs
                        value={this.props.currentTab}
                        onChange={(ev, newVal) => this.props.changeTab(newVal)}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {this.props.tabbar.tabs.map((el, ind) => {
                            return <Tab index={ind} label={
                                typeof el.label === "string" ? (
                                    <span>
                                        {el.label}
                                        {el.closeable && (
                                            <IconButton
                                                component="div"
                                                onClick={event => this.props.handleClose(event, ind)}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        )}
                                    </span>
                                ) : (
                                    el.label
                                )
                            } value={ind.toString()} />
                        })}
                    </Tabs>
                    {this.props.tabbar.panel.map((el, ind) => {
                        return (
                            <TabPanel index={ind} value={ind.toString()} >
                                {el}
                            </TabPanel>
                        )
                    })}

                </Box>
            </TabContext>
        )
    }
}




export default Tabbar