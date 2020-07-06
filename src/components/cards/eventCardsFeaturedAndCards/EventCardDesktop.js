
import React, { useState } from "react";
import classNames from "classnames";
import { cardTitle } from "../../../assets/material-kit-assets/jss/material-kit-react";
import { makeStyles } from "@material-ui/core/styles";
import { CustomButton, AddCalendar, CustomTheme } from "../../";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import GridItem from "../../material-kit-components/Grid/GridItem.js";
import GridContainer from "../../material-kit-components/Grid/GridContainer.js";
import EventEmailModal from "../EventEmailModal";

const theme = CustomTheme;

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

const days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
} 

const formatTime = function(hours, min) {
  let h = hours > 12 ? hours - 12 : hours;
  let m = min < 10 ? "0" + min.toString() : min.toString();
  let add = hours > 12 ? "PM" : "AM";
  return h + ":" + m + add;
};

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "row",
    boxShadow: "none",
    // marginTop: "0px",
    // marginBottom: "5px",
    paddingTop: '15px',
    paddingBottom:'15px',
    margin:0
  },
  nameHeader: {
    fontSize: '20px',
    // position: "absolute",
    color: "black",
    whiteSpace: "nowrap",
    // marginTop: "8px",
    marginLeft: "14px",
    // display:'inline-block'
  },
  orgHeader: {
    fontSize: '14px',
    color: '#0072CE',
    // display:'inline-block',
    marginLeft:'5px'
  },
  cardTitle,
  eventTitle: {
    color: "black",
    position: "relative",
    fontSize: 25
  },
  eventHost: {
    color: "#0072CE",
    position: "relative",
    fontSize: 20,
    display: "inline"
  },
  timeInfo: {
    color: "gray",
    // position: "absolute",
    // marginLeft: "4.32px",
    // marginRight: "9.61px",
    // marginTop: "4.68px",
    // marginBottom: "9.82px",
    // flexDirection: "row",
    // display:'inline-block'
    marginTop: "1px",
    fontSize: "12px"
  },
  middleDot: {
    height: "5px",
    width: "5px",
    marginLeft: "10px",
    marginBottom:'2px',
    backgroundColor: "gray",
    borderRadius: "50%",
    display: "inline-block",
    // flexDirection: "row"
  },
  tagInfo: {
    // color: "gray",
    // position: "absolute",
    // marginLeft: "10px",
    // display: "inline-block",
    marginTop: "8px",
    marginLeft: "14px",
    // flexDirection: "row"
  },
  tagBlock: {
    display: 'inline-block',
    fontSize: '10px',
    marginRight: '10px',
    backgroundColor: '#F2F2F2',
    paddingTop: 2, 
    paddingBottom: 1, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: "5px",
  },
  happeningBlock: {
    display: 'inline-block',
    fontSize: '10px',
    backgroundColor: '#F3FFEE',
    paddingTop: 2, 
    paddingBottom: 1, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: "5px",
    color: "#1BAE0E",
    marginRight: "10px",
  },
  pastBlock: {
    display: 'inline-block',
    fontSize: '10px',
    backgroundColor: '#BDBDBD',
    paddingTop: 2, 
    paddingBottom: 1, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: "5px",
    marginRight: "10px",
  },
  recurringBlock: {
    display: 'inline-block',
    fontSize: '10px',
    backgroundColor: '#FDEEE5',
    paddingTop: 2, 
    paddingBottom: 1, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: "5px",
    color: "#FB750D",
    marginRight: "10px",
  },
  popularBlock: {
    display: 'inline-block',
    fontSize: '10px',
    backgroundColor: '#F2F9FD',
    paddingTop: 2, 
    paddingBottom: 1, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: "5px",
    color: "#0072CE",
    marginRight: "10px",
  },
  cardbody: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  flexBox: {
    flexDirection: "column",
    marginLeft: "10px",
    marginTop: "3px",
    marginBottom: "3px",
  },
  flexBox2: {
    flexDirection: "column"
  },
  imageBox: {
    // position: "absolute",
    top: "3vw",
    backgroundColor: "#F2F9FD",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    borderRadius: "5.51px",
    height: "5vw",
    width: "5%"
  },
  dateBox: {
    marginLeft: "17px",
    marginTop: "15px"
  },
  dateText: {
    color: "#0072CE",
    fontSize: "16px",
    fontWeight: "light",
    marginLeft: "5px",
    // display: "inline-block",
    // textAlign: "center",
    // margin: 0,
    // marginTop: '0.3vw',
    // lineHeight: '2.5vw'
  },
  weekText: {
    fontWeight: 700,
    color: "#0072CE",
    fontSize: "16px",
  },
  // dateText: {
  //   color: "#0072CE",
  //   fontSize: "2.1vw",
  //   textAlign: "center",
  //   margin: 0,
  //   marginTop: '0.3vw',
  //   lineHeight: '2.5vw'
  // },
  monthText: {
    color: "#0072CE",
    fontSize: "1.3vw",
    textAlign: "center",
    margin: 0,
  },
  image: {
    borderRadius: "5px",
    height: "70px",
    width: "70px",
    // paddginTop:0,
    // paddingBottom: 0,
    // marginTop: "5%",
    display: "inline-block",
    objectFit: "cover"
  },
  calendar: {
    position: "absolute"
  },
  blueLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "lightblue"
  },
  websiteButton: {
    position: "absolute", 
    bottom: 0, 
    marginRight: "25px",
    width: "155px", 
    height: "35px"
  },
  joinButton: {
    // position: "absolute", 
    // bottom: 0, 
    marginRight: "25px",
    width: "155px", 
    height: "35px",
    marginTop: "6px"
  }
}));

export default function EventCardDesktop({ ele }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true)
  }

  const closeDo = () => {
    setOpen(false);
  }

  //if true the alert will say the event is now
  let displayNow = false
  let displayPast = false
  let displayRecurring = false
  let displayPopular = false

  let today = new Date()
  if ((new Date(ele.start_date)) < today && (new Date(ele.end_date)) > today) {
    displayNow = true
  }

  if ((new Date(ele.start_date)) > today && (new Date(ele.end_date)) > today) {
    displayPast = true
  }

  if (ele.recurring != "") {
    displayRecurring = true
  }

  return (

    <div style={{ width: "100%" }}>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1bh-content"
      >
        {/* put outer stuff here */}
        <div className={classes.flexBox}>
          <img className={classes.image} src={ele.image_link} alt={ele.event}/>
        </div> 
        
        <div className={classes.dateBox}>
            <span className={classes.weekText}>{days[ele.start_date.getDay()]}</span>
            <span className={classes.dateText}>{ele.start_date.getDate()} {months[ele.start_date.getMonth()]}</span>
            {/* <p className={classes.monthText}></p> */}
            <br/>
            <div className={classes.timeInfo}>
                {formatTime(ele.start_date.getHours(), ele.start_date.getMinutes())} -
                {formatTime(ele.end_date.getHours(), ele.end_date.getMinutes())} {ele.timeZoneGMT}
            </div>
        </div>
        <GridContainer style={{ marginLeft:30, marginRight:0 }}>
            <GridItem xs={12} sm={12} md={12}>
            <div className={classes.tagInfo}>
              {displayNow && <div className={classes.happeningBlock}>Happening Now!</div>}
              {displayPast && <div className={classes.pastBlock}>Past</div>}
              {displayRecurring && <div className={classes.recurringBlock}>Recurring</div>}
              {displayPopular && <div className={classes.popularBlock}>Popular</div>}

        <div className={classes.tagInfo}>
        {
          (() => {     
            if (ele.start_date <= new Date() && ele.end_date >= new Date()){
              return(   
              <div className={classes.happeningBlock}>Happening Now!
                <div className={classes.nameHeader}> {ele.event} <span className={classes.orgHeader}>{ele.name}</span> </div>
              </div>)
            }
          })()
        } 
        {
          (() => { 
            if (ele.recurring != ""){
              return(   
                <div className={classes.recurringBlock}>Recurring
                  <div className={classes.nameHeader}> {ele.event} <span className={classes.orgHeader}>{ele.name}</span> </div>
                </div>)
            }
          })()
        }
          {ele.tags.map((ta, ind) => {
            if (ta !== "") {
              return (
                  <div className={classes.tagBlock}>{ta}</div>
              );
            }
          })}
        </div>

      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ paddingLeft:0, paddingRight:0 }}>
        {/* put inner stuff here */}
        <GridContainer style={{ width: "100%", marginLeft:0, marginRight:0 }}>
            <GridItem xs={12} sm={12} md={12} style={{paddingBottom: 10, paddingLeft:25, paddingRight:25}}>
                <div className={classes.blueLine}></div>
            </GridItem>

            <GridItem xs={9} sm={9} md={9} style={{paddingTop:10, paddingBottom: 10, paddingLeft:40, paddingRight:10}}>
              <div style={{color: "black", display: "block", fontSize: "14px"}}>{ele.desc}</div>
            </GridItem>
            <GridItem xs={3} sm={3} md={3}>
              {ele.event_link && <CustomButton href={ele.event_link} text={"LEARN MORE"} newTab color={"blue"} size={"medium"} className={classes.websiteButton} />}
            </GridItem>

            <GridItem xs={9} sm={9} md={9} style={{marginTop: 10, paddingTop:10, paddingBottom: 10, paddingLeft:35, paddingRight:10}}>
              <div style={{ color: "#4284C8", marginBottom: 5}}>
                  <strong> <AddCalendar info={ele}/></strong>
              </div>
            </GridItem>

            <GridItem xs={3} sm={3} md={3}>
              {ele.invite_link && <CustomButton onClick={openModalHandler} text={'JOIN EVENT'} newTab color={"blue"} size={"medium"} className={classes.joinButton}/>}
            </GridItem>
        </GridContainer>
        {open && <EventEmailModal open={open} closeDo={closeDo} event={ele}/>} 
      </ExpansionPanelDetails>
    </ExpansionPanel>

    </div>
  );
}