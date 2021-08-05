const initialState = {
  token: null,
  userId: null,
};

const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        newUser: action.payload,
      };
    case 'LOGIN':
      return {
        token: action.token,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export default authenticate;
