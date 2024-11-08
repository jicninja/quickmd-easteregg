import { io } from 'socket.io-client';
import { API_DOMAIN } from '../config/constants';

const socket = io(API_DOMAIN);

export { socket };
