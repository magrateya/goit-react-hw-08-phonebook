import React from 'react';
import Snake from 'react-simple-snake';

const styles = {
  title: {
    fontWeight: 400,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome, to get your phonebook log in please.
      <span role="img" aria-label="Иконка приветствия">
        🤘
      </span>
    </h1>
    <div>
      <Snake width={400} />
    </div>
  </div>
);

export default HomeView;
