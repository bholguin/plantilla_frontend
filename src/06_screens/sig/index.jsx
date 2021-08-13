import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Business from '@material-ui/icons/Business';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from "react"
import Workspace from "../../workspace"
import { useSig } from "./hook"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const Sig = () => {
    const {
        empresas,
        goToDocuments
    } = useSig()
    const classes = useStyles();

    return (
        <Workspace>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" className={classes.title}>
                    Informacion de las empresas
                </Typography>
                <div className={classes.demo}>
                    <List dense={false}>
                        {
                            empresas && empresas.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Business />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.nombre}
                                        secondary={item.nit}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" onClick={() => goToDocuments(item)}>
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Grid>
        </Workspace>
    )
}

export default Sig