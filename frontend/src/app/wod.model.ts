import { Exercise } from './exercise.model';

export interface Wod {
  _id: String;
  name: String;
  exercises: Array<Exercise>;
}
