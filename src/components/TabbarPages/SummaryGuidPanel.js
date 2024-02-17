import React, { Component } from "react";
import PropTypes from "prop-types";
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import ribbon_classif from "../../data/ribbon_classification";



class SummaryGuidPanel extends Component {

    componentDidMount() {
        this.ribbon = new RibbonDHX(this.ribbonRef, {
            css: "dhx_widget--bordered dhx_widget--bg_white",

            data: ribbon_classif
        });
    }

    componentWillUnmount() {
        this.ribbon && this.ribbon.destructor();
    }


    render() {
        return (
            <div style={{ width: "100%" }} ref={el => (this.ribbonRef = el)}></div>
        )
    }
}



export default SummaryGuidPanel