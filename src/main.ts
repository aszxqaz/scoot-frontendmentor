import './less/main.scss';

import './webp.js';
import { burgerInit } from './burger';
import { hashrouterInit, initLinks } from './hashrouter';


burgerInit();
initLinks()

hashrouterInit()