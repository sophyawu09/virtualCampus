import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
    },
    title: {
        color: "#0072CE",
        fontSize: "36px",
        lineHeight: "54px",
    },
    subtitle: {
        fontSize: "14px",
        lineHeight: "21px"
    },
    topBuffer: {
        marginTop: 66
    }

}))

const FormTitle = (props) => {
    const classes = useStyles()

    return (
        <Grid item xs={4}>
            <div className={classNames(classes.root, classes.title)}>
                {props.title}
            </div>
            <div className={classNames(classes.root, classes.subtitle)}>
                {props.desc}
            </div>
            <div className={classNames(classes.root, classes.subtitle, classes.topBuffer)}>
                Questions? Contact us at <br />
                <a href='mailto:columbiavirtualcampus@gmail.com'>columbiavirtualcampus@gmail.com</a>.
            </div>
        </Grid>

    )
}

export default FormTitle