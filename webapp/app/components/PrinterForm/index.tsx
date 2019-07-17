/**
 *
 * PrinterForm
 *
 */

import React from 'react';
import { Theme, createStyles, withStyles, WithStyles, Paper, Typography, Button } from '@material-ui/core';
import { Field } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';

const styles = (theme: Theme) =>
  createStyles({
    // JSS in CSS goes here
  });

interface OwnProps extends WithStyles<typeof styles> {
  onSubmit(): void;
}

const PrinterForm: React.SFC<OwnProps> = (props: OwnProps) => {
  return <Paper>
    <Typography>Printer Details</Typography>
    <Field name="name" label="Name:" component={TextField} />
    <Field name="ipAddress" label="IP Address:" component={TextField} />
    <Field name="isActive" Label={{label: "Active"}} component={CheckboxWithLabel} />
    <Button onClick={props.onSubmit}>Save</Button>
  </Paper>;
};

export default withStyles(styles, { withTheme: true })(PrinterForm);
