/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import { language, features } from "config";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{language.mobile_apps_on_store}</h2>
            <img className={classes.triobanner} src={require("../../assets/img/triobanner.png")} alt="App Banner" />
          </GridItem>
          <GridItem xs={12} sm={8} md={6} style={{paddingTop:30}}>
            <a href={features.AppleStoreLink}><img src="https://dev.exicube.com/images/appstore.png" alt="Apple Store Link"/></a>
            <span style={{marginRight: '5px'}}></span>
            <a href={features.PlayStoreLink}><img src="https://dev.exicube.com/images/playstore.png" alt="Playstore Link"/></a>
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
