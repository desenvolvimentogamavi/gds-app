
import {createContext, useCallback, useContext, useState} from 'react';

import {Alert} from 'react-native';
import { api } from '../../../service/api';
import { getTokenOnStorage, getUserOnStorage } from '../../../service/storage';


interface ILoginProps {
  login: string;
  senha: string;
}

export interface User {
  codigoRetorno: string
  mensagemRetorno: string;
  payload: {
    access_token: string;
  },
  dataTransacao: string;
}

interface AuthData {
  token: string;
  loading: boolean;
  user: User;
  requestLogin: ({login, senha}: ILoginProps) => Promise<any>;
}

const AuthContext = createContext<AuthData>({} as AuthData);

const AuthProvider: React.FC = ({children}) => {
  const [token, setValueToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);

//   const getUserData = useCallback(async () => {
//     const storageUserData = await getUserOnStorage();
//     const userData: User = !storageUserData
//       ? null
//       : JSON.parse(storageUserData);
//     if (!userData) {
//       return false;
//     }
//     setUser(userData);

//     var jwt = await getTokenOnStorage();
//     if (jwt) {
//       setValueToken(jwt);
//     }

//     return true;
//   }, []);

  

  const requestLogin = useCallback(async ({login, senha}: ILoginProps) => {
    setLoading(true);

    try {
      const {data, status} = await api.post('sistema/auth/login', {
        login,
        senha,
      });
      console.log(status);
      if (status > 300) {
        throw new Error();
      }

      setUser(data);
      return true;
    } catch (error: any) {
      Alert.alert('Usuário inválido ou Senha inválida');
      console.log(error.error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        // getUserData,
        requestLogin,
        user,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a GlobalProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};