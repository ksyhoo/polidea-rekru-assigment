import React from 'react';
import { ListContainer } from './styled';
import { useScroll, useDebounce } from 'utils/hooks';
import { Repository } from 'utils/types';

interface Props {
  data: Repository[];
  onEnd: () => void;
  isLoading?: boolean;
  renderItem: (data: Repository, key: number) => React.ReactNode;
}

const InfinityScroll: React.FC<Props> = ({
  data = [],
  onEnd = () => null,
  isLoading = true,
  renderItem = () => null,
}: Props) => {
  const scrollHeight = useScroll();

  useDebounce(
    () => {
      if (
        isLoading &&
        scrollHeight >= document.documentElement.offsetHeight - 10
      ) {
        onEnd();
      }
    },
    500,
    [scrollHeight, isLoading]
  );

  return <ListContainer>{data.map(renderItem)}</ListContainer>;
};

export default InfinityScroll;
