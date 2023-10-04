export interface IGame {
  alternate_titles:   IAlternateTitle[];
  description:        string;
  game_id:            number;
  genres:             IGenre[];
  moby_score:         number;
  moby_url:           string;
  num_votes:          number;
  official_url:       null;
  platforms:          IPlatform[];
  sample_cover:       ISample;
  sample_screenshots: ISample[];
  title:              string;
}

export interface IAlternateTitle {
  description: string;
  title:       string;
}

export interface IGenre {
  genre_category:    string;
  genre_category_id: number;
  genre_id:          number;
  genre_name:        string;
}

export interface IPlatform {
  first_release_date: Date;
  platform_id:        number;
  platform_name:      string;
}

export interface ISample {
  height:          number;
  image:           string;
  platforms?:      string[];
  thumbnail_image: string;
  width:           number;
  caption?:        string;
}
