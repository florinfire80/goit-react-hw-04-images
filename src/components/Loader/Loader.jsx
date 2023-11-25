import React, { Component } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CirclesWithBar type="Oval" color="#00BFFF" height={50} width={50} />
        <p>Loading...</p>
      </div>
    );
  }
}

export default Loader;

// import React from 'react';
// import { CirclesWithBar } from 'react-loader-spinner';

// const Loader = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <CirclesWithBar type="Oval" color="#00BFFF" height={50} width={50} />
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Loader;
