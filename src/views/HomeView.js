import React from 'react';
import Animation from '../components/Amination/Animation';

const styles = {
  title: {
    fontWeight: 400,
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: '10px',
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <Animation />
    <p style={styles.title}>
      To get your phonebook log in please.
      <span role="img" aria-label="Иконка приветствия">
        🤘
      </span>
    </p>
  </div>
);

export default HomeView;
