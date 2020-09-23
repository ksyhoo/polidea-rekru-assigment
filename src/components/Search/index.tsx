import React from 'react';
import { Input } from './styled';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from 'store/searchRepositories';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (query: string) => dispatch(setSearchTerm(query));

  return (
    <Input
      placeholder="Type here to start searching"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value)
      }
      //TODO: add value for controlled component
    />
  );
};

export default Search;
