/**
 *
 * PrinterList
 *
 */

import React from 'react';
import { Theme, createStyles, withStyles, WithStyles, TableHead, TableRow, TableCell, Table, Paper, TableBody } from '@material-ui/core';
import { Printer } from 'containers/App/types';

const styles = (theme: Theme) =>
  createStyles({
    // JSS in CSS goes here
  });

interface OwnProps extends WithStyles<typeof styles> {
  printers: Array<Printer>,
}

const PrinterList: React.SFC<OwnProps> = (props: OwnProps) => {
  return <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Active</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.printers.map(p =>
          <TableRow key={p.id}>
            <TableCell>{p.id}</TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.isActive}</TableCell>
            <TableCell></TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
  </Paper>;
};

export default withStyles(styles, { withTheme: true })(PrinterList);
