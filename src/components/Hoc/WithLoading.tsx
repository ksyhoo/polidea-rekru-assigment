import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { WithLoadingContainer, LoadingWrapper } from './styled';

const WithLoading = (
  Component: React.SFC<{ setLoading: (isLoading: boolean) => void }>
) => {
  return function WrappedWithLoading(props: {
    isLoading?: boolean;
  }): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const setLoading = (isComponentLoading: boolean) =>
      setIsLoading(isComponentLoading);
    return (
      <LoadingWrapper>
        <Component {...props} setLoading={setLoading} />
        {isLoading && (
          <WithLoadingContainer>
            <ClipLoader size={150} loading={isLoading} />
          </WithLoadingContainer>
        )}
      </LoadingWrapper>
    );
  };
};

export default WithLoading;
