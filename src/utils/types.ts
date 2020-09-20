export interface SearchRepositoriesState {
  repositories: Repository[];
  isLoading: boolean;
  error: string;
}

export type RepositoryResponse = {
  name: string;
  owner: {
    login: string;
    type: string;
  };
  stargazers_count: number;
  language: string;
  id: number;
};

export type Repository = {
  name: string;
  owner: Owner;
  numberOfStars: number;
  primaryLanguage: string;
  id: number;
};

export type Owner = {
  name: string;
  type: string;
};
