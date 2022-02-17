"use strict";

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');


let num = 50;

for (let i = 1; i < 9; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
} */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* for (let i = 0; i < 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }
} */

let x = 0;
while (x < 3){
    const   a = prompt('Последний фильм?', ''),
            b = +prompt('Ваша оценка?', '');
    (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b: x--, console.log("done");
    x++;
}

/* for (let i = 0; i < 6; i++) {
    if (i === 3) {
        break;
    }
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Done');
} else {
    console.log('error');
    i--;
    }
} */


/* let y = 3;
while (y < 6) {
    const a = prompt('Ласт фильм', ''),
          b = prompt('Оценка', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        y--;
    }
    y++;
} */


if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);