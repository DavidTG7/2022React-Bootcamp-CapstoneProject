import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { useLocation } from "react-router-dom";
import { useGeneralFetch } from '../../utils/hooks/useGenaralFetch';
import Pagination from '../ProductList/PaginationControl/Pagination';
import { searchCardGenerator } from './SearchResults.helper';
import { NotResults, SearchMain } from './SearchResults.styles';
import { URLS } from '../../utils/constants'
import { Spiner } from '../ProductList/ProductList.styles';
import {customHandleClick} from '../../utils/customHandleClick';

export function SearchResults() {
  const [reload, setReload] = useState(false);
  const location = useLocation();
  let searchQuery = new URLSearchParams(location.search).get('q');
  const { data, isLoading } = useGeneralFetch(URLS.search, searchQuery, reload, setReload);
  const { shoppingCart, setShoppingCart } = useContext(AppContext);

  useEffect(() => {
    setReload(true)
  }, [location.search])
  
  const cards = data.results_size
    ? searchCardGenerator(data, customHandleClick, 
      shoppingCart,
      setShoppingCart)
    : <NotResults>NO RESULTS FOUND</NotResults>;
  
  return isLoading
    ? <Spiner />
    : <SearchMain>
        {data.results_size < 20
          ? cards
          : <Pagination size='20' data={cards} />
        }
      </SearchMain>
}