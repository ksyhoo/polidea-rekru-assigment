import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { WithLoadingContainer } from './styled';

const WithLoading = (Component: any) => {
  return function WrappedWithLoading(props: any): any {
    const [isLoading, setIsLoading] = useState(false);
    const setLoading = (isComponentLoading: boolean) =>
      setIsLoading(isComponentLoading);

    return (
      <>
        {isLoading && (
          <WithLoadingContainer>
            <ClipLoader size={150} loading={props.isLoading} />
          </WithLoadingContainer>
        )}
        <Component {...props} setLoading={setLoading} />
      </>
    );
  };
};

export default WithLoading;
