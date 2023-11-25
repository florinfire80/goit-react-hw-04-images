import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick, isVisible } = this.props;

    return (
      <button
        className={styles['button']}
        onClick={onClick}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        Load more
      </button>
    );
  }
}

export default Button;

// ===============================
// import React from 'react';
// import styles from './Button.module.css';

// const Button = ({ onClick, isVisible }) => {
//   return (
//     <button
//       className={styles['button']}
//       onClick={onClick}
//       style={{ display: isVisible ? 'block' : 'none' }}
//     >
//       Load more
//     </button>
//   );
// };

// export default Button;
