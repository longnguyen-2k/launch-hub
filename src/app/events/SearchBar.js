'use client';
import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './page.module.css'

const SearchBar = () => {
  return (
    <Input
      className={styles.search_input}
      prefix={<SearchOutlined />}
      placeholder="Search for event"
      style={{ width: '100%',color:'#A1A1AA',borderBottom: '1px solid #E8E8EA'  }}
    />
  );
};

export default SearchBar;
