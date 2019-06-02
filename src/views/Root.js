import React from 'react';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import DetailsTemplate from 'templates/DetailsTemplate';
import Navigation from 'components/organisms/Navigation';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import store from '../store/configStore';
import HighFake from './HighFake';
import MediumFake from './MediumFake';
import LowFake from './LowFake';
import HomePage from './HomePage';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <Navigation />
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.detailsPage} component={DetailsTemplate} />
              <Route exact path={routes.lowFake} component={LowFake} />
              <Route exact path={routes.mediumFake} component={MediumFake} />
              <Route exact path={routes.highFake} component={HighFake} />
            </Switch>
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
