import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleInputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { searchValue } = this.state;

    if (searchValue.trim() === '') {
      toast.error('Please enter a valid search term');
      return;
    }

    try {
      const result = await this.props.onSubmit(searchValue);
      if (result && result.length === 0) {
        toast.warn('No images found for the given search term');
      }
    } catch (error) {
      console.error('Error while searching for images:', error);

      toast.error(
        error.message || 'An error occurred while searching for images.'
      );
    }
  };

  render() {
    const { searchValue } = this.state;

    return (
      <header className={styles['searchbar']}>
        <form className={styles['searchForm']} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['searchForm-button']}>
            <span className={styles['searchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['searchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from './Searchbar.module.css';

// const Searchbar = ({ onSubmit }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleInputChange = event => {
//     setSearchValue(event.target.value);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     if (searchValue.trim() === '') {
//       toast.error('Please enter a valid search term');
//       return;
//     }

//     try {
//       const result = await onSubmit(searchValue);
//       if (result && result.length === 0) {
//         toast.warn('No images found for the given search term');
//       }
//     } catch (error) {
//       console.error('Error while searching for images:', error);

//       toast.error(
//         error.message || 'An error occurred while searching for images.'
//       );
//     }
//   };

//   return (
//     <header className={styles['searchbar']}>
//       <form className={styles['searchForm']} onSubmit={handleSubmit}>
//         <button type="submit" className={styles['searchForm-button']}>
//           <span className={styles['searchForm-button-label']}>Search</span>
//         </button>

//         <input
//           className={styles['searchForm-input']}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={searchValue}
//           onChange={handleInputChange}
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;
