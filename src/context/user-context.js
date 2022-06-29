import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userReducerFunc = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_CHECK':
        return { ...state, checked: !state.checked };
      case 'EMAIL':
        return { ...state, email: action.payload };
      case 'PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      case 'LOGOUT_USER':
        return { ...state };
      default:
        return state;
    }
  };

  const [userState, userDispatch] = useReducer(userReducerFunc, {
    email: '',
    password: '',
    checked: false,
    userCheck: false,
  });

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
