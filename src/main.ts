import './less/main.scss';

import './webp.js';
import { burgerInit } from './burger';
import { HashRouter } from './hashrouter';
import './accordion';

burgerInit();

const hashrouter = new HashRouter()