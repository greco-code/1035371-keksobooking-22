import './data.js';
import './popup.js'
import {createCard, similarOffers} from './popup.js';

const map = document.querySelector('#map-canvas');

map.appendChild(createCard(similarOffers[0]));
