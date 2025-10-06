import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
   
  { 
    id: 1, 
    title: 'OG', 
    year: 2018, 
    posterUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxODUuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369074-asrgqvfrbx-portrait.jpg',
    director: 'Prashanth Neel', 
    description: 'A young man rises in the Kolar Gold Fields.', 
    favorite: false
  },
  { 
    id: 2, 
    title: 'Kantara', 
    year: 2022, 
    posterUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxMjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00377351-sefuzkxcls-portrait.jpg', 
    director: 'Rishab Shetty', 
    description: 'A story of tradition, forest, and valor.', 
    favorite: false
  },
  { 
   id: 3, 
    title: 'Lokah', 
    year: 2014, 
    posterUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMTQuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00456016-canftltexg-portrait.jpg',
    director: 'Prashanth Neel', 
    description: 'A former gangster returns to protect his town.', 
    favorite: false
  },
  { 
    id: 4, 
    title: 'Idli Kadai', 
    year: 2023, 
    posterUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418958-jghwmvwqmk-portrait.jpg',
   director:'Ramesh',
    description: 'A heartwarming tale of friendship and street food.', 
    favorite: false
  },
  { 
    id: 5, 
    title: 'Jolly LLB 3', 
    year: 2024, 
    posterUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA1Ny4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00450799-rwxwjqxupb-portrait.jpg',  // replace with actual poster URL
    director: 'Subhash Kapoor', 
    description: 'The lawyer returns with a new challenging case.', 
    favorite: false
  },

  { 
    id: 6, 
    title: 'Balti', 
    year: 2021, 
    posterUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA4LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00459410-myfdchhwqe-portrait.jpg',
    director: 'Anil Kumar', 
    description: 'A thrilling story from the streets of the city.', 
    favorite: false
  },
{ 
    id: 7, 
    title: 'Avatar', 
    year: 2009, 
    posterUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAyMjguM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00037264-mkedhtbhsh-portrait.jpg',
    director: 'James Cameron', 
    description: 'A marine on an alien planet discovers a new world.', 
    favorite: false
  },
  { 
    id: 8, 
    title: 'Su From So', 
    year: 2032, 
    posterUrl:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxMTYuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00454128-xfagkhbzga-portrait.jpg',
    director: 'Meera Nair', 
    description: 'An inspiring journey of a young artist.', 
    favorite: false
  }

  
  
    
  ];

  getMovies(): Movie[] {
    return [...this.movies];
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
