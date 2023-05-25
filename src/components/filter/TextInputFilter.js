'use client'
import { useState } from 'react';
import "../../styles/inputfield/sectionfilter.scss"
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function SectionFilter({ placeholder }) {
    const [keyword, setKeyword] = useState('');

    const onSearch = () => {
        // Handle the search logic here
        console.log('Search keyword:', keyword);
    };

    return (
        <div className="v-section__filter">
            <div className="v-row justify-space-between">
                <div className="v-col">
                    <Input
                        suffix={<SearchOutlined />}
                        type="text"
                        className="v-text-field"
                        placeholder={placeholder}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />

                </div>
            </div>
        </div>
    );
}