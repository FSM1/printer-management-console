/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Grid } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import * as actions from './actions';
import saga from './saga';
import makeSelectPrinterManagement from './selectors';
import AppWrapper from '../../components/AppWrapper/index';
import PrinterList from 'components/PrinterList';
import { Printer } from './types';
import appReducer from './reducer';
import PrinterForm from 'components/PrinterForm';


interface OwnProps { }

interface StateProps {
  printers: Array<Printer>
}

interface DispatchProps {
  addPrinter(data): void,
  updatePrinter(data): void,
  deletePrinter(id): void,
}

type Props = StateProps & DispatchProps & OwnProps;
const App: React.SFC<Props> = (props: Props) => {
  const printerSchema = Yup.object().shape({
    name: Yup.string().required(),
    ipAddress: Yup.string().required(),
    isActive: Yup.boolean().required()
  })
  return (
    <AppWrapper>
      <Grid container>
        <Grid item sm={12} md={6}><PrinterList printers={props.printers} /></Grid>
        <Grid item sm={12} md={6}>
          <Formik
            initialValues={{
              name: '',
              ipAddress: '',
              isActive: false,
            }}
            validationSchema={printerSchema}
            onSubmit={
              (values) => {
                props.addPrinter(values);
              }
            }
            render={({ submitForm }) =>
              <PrinterForm onSubmit={submitForm} />
            }
          />
        </Grid>
      </Grid>
    </AppWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  printers: makeSelectPrinterManagement(),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    addPrinter: (data) => dispatch(actions.addPrinter.request(data)),
    updatePrinter: (data) => dispatch(actions.updatePrinter.request(data)),
    deletePrinter: (id) => dispatch(actions.deletePrinter.request(id))
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({ key: 'app', reducer: appReducer })
const withSaga = injectSaga<OwnProps>({ key: 'app', saga: saga, mode: DAEMON });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
