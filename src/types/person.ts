export enum Gender {
  Unknown,
  Female,
  Male,
}

export interface PersonDetail {
  id: number;
  name: string;
  gender: Gender;
  place_of_birth: string;
  birthday: string;
  deathday: string;
  homepage: string;
  imdb_id: string;
  profile_path: string;
  biography: string;
}

export interface SWRPersonDetail {
  data: PersonDetail;
  isLoading: boolean;
  isError: boolean;
}
