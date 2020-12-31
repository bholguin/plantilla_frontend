

const button_create = {
    position: 'absolute',
    right: '3%',
    bottom: '4%',
    zIndex: "99999",
    backgroundColor: '#3f51b5',
    color: 'white'
}

const drawerWidth = 240;

const header_app = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'fixed',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        overflow: "auto"
    },
    toolbar_color: {
        backgroundColor: '#3f51b5'
    },
    logout: {
        float: 'rigth',
        color: 'white'
    },
    widthHeaderMenu: {
        flex: 33
    },
    widthHeaderModule: {
        flex: 33,
        textAlign: 'center'
    },
    widthHeaderLogout: {
        flex: 33,
        textAlign: 'right',
        marginRight: 20
    },
    linkIcons:{
        marginLeft:'20px',
        verticalAlign:'super',
        textDecoration:'none',
        color:'#4d4343'
    },
    IconTag:{
        marginLeft:'30px',
        verticalAlign:'super',
    }
});





export{
    button_create,
    header_app
}