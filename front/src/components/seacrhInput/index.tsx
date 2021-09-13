import React, { FC } from 'react';
import { Input } from 'antd';
import './index.scss';

const { Search } = Input;

export const SearchInput: FC = () => {

    return (
        <div className='search-input-wrapper'>
            <Search
                inputMode={"search"}
                onSearch={value => console.log(value)}
            />
        </div>
    )
}

export default SearchInput;