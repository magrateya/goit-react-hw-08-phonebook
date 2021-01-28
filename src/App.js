import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Section from './components/Section/Section';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from './redux/auth';
import { authOperations } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      {isFetchingCurrentUser ? (
        <h1>React Sceleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Loader />}>
              <Route path="/" exact>
                <HomeView />
              </Route>

              <PrivateRoute path="/contacts">
                <PhonebookView />
              </PrivateRoute>

              <PublicRoute
                path="/register"
                restricted
                component={RegisterView}
                redirectTo={'/contacts'}
              />

              <PublicRoute
                path="/login"
                restricted
                component={LoginView}
                redirectTo={'/contacts'}
              />
            </Suspense>
          </Switch>
        </>
      )}
    </Section>
  );
}
