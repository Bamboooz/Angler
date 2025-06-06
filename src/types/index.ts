import { Method, SpeciesType } from "../const";

export interface Species {
  species: SpeciesType;
  latin: string;
  description: string;
}

export interface Knot {

}

export interface Rig {

}

export interface Fish {
  species: Species;
  date: Date;
  method?: Method;
  length?: number;
  weight?: number;
  images?: string[];
}
