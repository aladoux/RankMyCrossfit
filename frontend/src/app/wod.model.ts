import { Exercise } from './exercise.model';

export interface Wod {
  id: String;
  name: String;
  exercises: Array<Exercise>;
}
