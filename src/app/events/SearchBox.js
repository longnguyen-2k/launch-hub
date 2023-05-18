'use client';
import React from 'react';
import SearchBar from './SearchBar';
import styles from './page.module.css'
import DropdownList from './DropdownList';
import { Row } from 'antd';
const SearchBox = () => {
  return (
    <div className={styles.search_box}>
      <SearchBar />
      <Row className={styles.search_filter} >
        <div style={{marginRight:'20px'}}>Search Filters: </div>
        <DropdownList  style={{marginRight:'40px'}}/> 
        <DropdownList /> 
      </Row>
    </div>
  );
};

export default SearchBox;
