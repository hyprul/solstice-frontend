import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Home
              </Typography>
            </Button>
          </Link>

          <Link to="/bill" style={{ textDecoration: "none", color: "white" }}>
            <Button
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Data
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
