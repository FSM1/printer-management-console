import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';


const styles = theme => createStyles({
  root: {
    display: 'flex',
    backgroundColor: '#00b5bd',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#01223b',
  },
  appHeading: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    minHeight: '100vh',
    padding: `${theme.spacing(9)}px ${theme.spacing(3)}px ${theme.spacing(3)}px `,
  },
});

interface Props extends WithStyles<typeof styles> { }

class AppWrapper extends React.Component<Props> {
  public render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant='h2' className={classes.appHeading}>PRINTER MANAGEMENT CONSOLE</Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppWrapper);
