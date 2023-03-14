import * as bootstrap from 'bootstrap';
import scss from './style.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import PokeContainer from './app/poke-container';

import fetchPokemons from './app/fetch';

const START = 10;
const NUMBER_OF_IMAGES = 100;

fetchPokemons()