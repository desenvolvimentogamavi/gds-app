import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../features/authentication/context';

export async function setUserOnStorage(user: User) {
  return AsyncStorage.setItem('userData', JSON.stringify(user));
}

export async function getUserOnStorage() {
  return AsyncStorage.getItem('userData');
}

export async function setTokenOnStorage(token: string) {
  return AsyncStorage.setItem('token', token);
}

export async function getTokenOnStorage() {
  return AsyncStorage.getItem('token');
}