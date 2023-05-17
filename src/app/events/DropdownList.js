'use client';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DropdownList = (props) => {
  const handleChange = (value) => {
    console.log(`Selected value: ${value}`);
  };

  return (
    <Select
      defaultValue="Option 1"
      onChange={handleChange}
      {...props}
    >
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
      <Option value="Option 4">Option 4</Option>
    </Select>
  );
};

export default DropdownList;
