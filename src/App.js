import { Route, Switch } from 'react-router-dom';
import Section from './components/Section/Section';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import PhonebookView from './views/PhonebookView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

export default function App() {
  return (
    <Section>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/phonebook">
          <PhonebookView />
        </Route>

        <Route path="/register">
          <RegisterView />
        </Route>

        <Route path="/login">
          <LoginView />
        </Route>
      </Switch>
    </Section>
  );
}
