import React, {Fragment} from 'react';

const Home = ({ setAuth }) => {
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={() => setAuth(true)}>logout</button>
    </Fragment>
  )
}

export default Home