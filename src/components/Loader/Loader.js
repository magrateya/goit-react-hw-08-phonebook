import React from 'react';

import Loader from 'react-loader-spinner';

export default class LoaderRings extends React.Component {
  render() {
    return (
      <Loader
        type="Bars"
        color="#f1c40f"
        height={30}
        width={30}
        timeout={2000}
      />
    );
  }
}
