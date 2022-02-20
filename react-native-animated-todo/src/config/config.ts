import io from 'socket.io-client';

export const API_URL = 'http://192.168.1.68:5000';
export const SOCKET = io(API_URL, {
    transports: ['websocket'], 
  });