import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});


function Stations(props) {
  const { classes, stations } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Bikes Avail</TableCell>
            <TableCell align="right">Bikes Taken</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stations.map(station => (
            <TableRow key={station.id}>
              <TableCell align="right">{station.extra.address}</TableCell>
              <TableCell align="right">Formula here for distance</TableCell>
              <TableCell align="right">{station.free_bikes}</TableCell>
              <TableCell align="right">{station.empty_slots}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Stations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stations);