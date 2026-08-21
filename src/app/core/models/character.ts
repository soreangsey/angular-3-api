export interface Character {

  id: number;

  name: {
    first: string;
    middle: string;
    last: string;
  };

  images: {
    main: string;
  };

  age: string;
  gender: string;
  species: string;
  occupation: string;
}