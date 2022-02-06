import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <hr style={{margin: '15px'}}/>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск'
            />
            <hr style={{margin: '15px'}}/>

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по'
                options={[
                    {value: 'title', name: 'Заголовку'},
                    {value: 'body', name: 'Описанию'},
                ]}

            />

            <hr style={{margin: '15px'}}/>
        </div>
    );
};

export default PostFilter;