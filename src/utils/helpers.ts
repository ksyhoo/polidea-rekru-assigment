import { Repository, RepositoryResponse } from './types';

export const normalizeResponse = (
  response: RepositoryResponse[]
): Repository[] =>
  response.map((res: RepositoryResponse) => ({
    name: res.name,
    numberOfStars: res.stargazers_count,
    primaryLanguage: res.language,
    owner: {
      name: res.owner.login,
      type: res.owner.type,
    },
    id: res.id,
  }));
