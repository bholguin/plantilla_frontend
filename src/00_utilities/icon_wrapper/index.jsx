import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        '& a': {
            textDecoration: 'none',
            color: '#4d4343',
            '& svg':{
                width: '3em',
                height: '3em'
            }
        },
    }
});

const IconPanel = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.icon}>
            { props.children}
        </div>
    )
}

export default IconPanel;