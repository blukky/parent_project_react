import React, { Component } from "react";
import PropTypes from "prop-types";
import { Sidebar as SidebarDHX, TreeCollection } from "dhx-suite";
import ClassificationPanel from "./TabbarPages/ClassificationPanel"
import SummaryGuidPanel from "./TabbarPages/SummaryGuidPanel"
import DepartamentOfferPanel from "./TabbarPages/DepartamentOfferPanel"
import BusyEmployementsPanel from "./TabbarPages/BusyEmployementsPanel"
import CoordinationInspectionPanel from "./TabbarPages/CoordinationInspectionPanel"
import sidebar from "../data/sidebar";

class Sidebar extends Component {
	
	componentDidMount() {

		this.panels = {
			"classification": { name: "Классификаторы", panel: <ClassificationPanel /> },
			"reference_organization": { name: "НФО", panel: <SummaryGuidPanel /> },
			"offer_departament": { name: "Предложения департаментов", panel: <DepartamentOfferPanel /> },
			"busy_employee": { name: "Занятость сотрудников", panel: <BusyEmployementsPanel /> },
			"coordination_inspection": { name: "Координация", panel: <CoordinationInspectionPanel /> }
		}

		this.sidebar = new SidebarDHX(this.el, {
			css: "dhx_widget--border_right custom-sidebar",
			width: 250,
			data: sidebar
		});
		this.sidebar.events.on("click", (id) => {
			if (id === "toggle") {
				const toggleItem = this.sidebar.data.getItem("toggle");
				this.sidebar.toggle();
				if (this.sidebar.config.collapsed) {
					toggleItem.icon = "mdi mdi-menu";
				} else {
					toggleItem.icon = "mdi mdi-backburger";
				}
			} else {
				try {
					const currentPanel = this.panels[id];
					if (currentPanel){
						this.props.addTab(currentPanel["name"], currentPanel["panel"]);
					}
					
				}
				catch {
					console.log('====================================');
					console.log("Not found id");
					console.log('====================================');
				}
			}


		});
	}
	componentWillUnmount() {
		this.sidebar && this.sidebar.destructor();
	}
	render() {
		return <div ref={el => (this.el = el)}></div>;
	}
}

Sidebar.propTypes = {
	css: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	collapsed: PropTypes.bool,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
};

export default Sidebar;
