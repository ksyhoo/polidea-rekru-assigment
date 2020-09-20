import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Wrapper } from './styled';

const WithLoading = (Component: any) => {
  return function WrappedWithLoading(props: any): any {
    const [isLoading, setIsLoading] = useState(false);
    const setLoading = (isComponentLoading: boolean) =>
      setIsLoading(isComponentLoading);
    return (
      <>
        {isLoading && (
          <Wrapper>
            <ClipLoader size={150} loading={props.isLoading} />
          </Wrapper>
        )}
        <Component {...props} setLoading={setLoading} />
      </>
    );
  };
};

export default WithLoading;
