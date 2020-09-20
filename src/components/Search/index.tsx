import React from 'react';
import { Wrapper, Input } from './styled';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from 'store/searchRepositories';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (query: string) => dispatch(setSearchTerm(query));

  return (
    <Wrapper>
      <Input
        placeholder="Type here to start searching"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </Wrapper>
  );
};

export default Search;
