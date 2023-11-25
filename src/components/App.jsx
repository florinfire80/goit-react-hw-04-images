import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import searchPixabayImages from './pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSubmit = (value, pageNum) => {
    setLoading(true);

    const keyChanged = value !== searchKey;
    setSearchValue(value);
    setSearchKey(value);

    if (keyChanged) {
      setSearchResults([]);
      setpage(1);
    }

    searchPixabayImages(value, page)
      .then(response => {
        setSearchResults(prevResults =>
          keyChanged
            ? response.data.hits
            : [...prevResults, ...response.data.hits]
        );
      })
      .catch(error => {
        console.error('Pixabay API error:', error);
        toast.error(
          error.message || 'An error occurred while fetching images.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    handleSearchSubmit(searchValue, nextPage);
    setpage(nextPage);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={searchResults} />
      {loading && <Loader />}
      <Button onClick={handleLoadMore} isVisible={searchResults.length > 0} />
      <ToastContainer />
    </div>
  );
};

export default App;
