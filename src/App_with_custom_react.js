import React from "react";
import Sidebar from "./components/Sidebar"
import Tabbar from "./components/Tabbar"
import StartPanel from "./components/TabbarPages/StartPanel"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabbarRef: null,
      currentTab: "0",
      tabbar: {
        "tabs": [
          { label: "Старт", closeable: false }
        ],
        "panel": [
          <StartPanel />
        ]
      }
    }

    this.addTab = this.addTab.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }


  render() {
    return (
      <div className="container">
        <Sidebar  addTab={this.addTab} />
        <Tabbar changeTab={this.changeTab} handleClose={this.handleClose} currentTab={this.state.currentTab} tabbar={this.state.tabbar} />
      </div>
    );
  }

  addTab(tab, panel) {
    if (this.state.tabbar.tabs.filter(el => el === tab).length !== 0) {
      let tabIndex = this.state.tabbar.tabs.indexOf(tab)
      this.setState({ currentTab: tabIndex.toString() })
    }
    else {
      this.setState({
        tabbar: {
          tabs: [...this.state.tabbar.tabs, { label: tab, closeable: true }],
          panel: [...this.state.tabbar.panel, panel]
        },
        currentTab: (parseInt(this.state.currentTab) + 1).toString()
      })

    }
  }

  changeTab(ind) {
    this.setState({ currentTab: ind })
  }


  handleClose(event, ind) {
    if (ind > -1 && ind < this.state.tabbar.tabs.length) {
      let remove_tab = this.state.tabbar.tabs[ind];
      let remove_panel = this.state.tabbar.panel[ind];
      this.setState({
        tabbar: {
          tabs: this.state.tabbar.tabs.filter((el => el.label !== remove_tab.label)),
          panel: this.state.tabbar.panel.filter((el => el !== remove_panel))
        },
        currentTab: (parseInt(this.state.currentTab) - 1).toString()
      })
    }

  }

}

export default App;
