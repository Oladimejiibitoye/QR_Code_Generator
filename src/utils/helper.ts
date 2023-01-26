import { Movie } from "@prisma/client";


//create an helper function to shuffle an array
export const shuffle: (array: Movie[]) => Movie[] = function(array: Movie[]){
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}