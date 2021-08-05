export const login = (email, password) => {
  const request = fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIIBZrVLnr7ny4qGZlWkYj46LE3xZjPfg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    },
  );
  if (!request.ok) {
    console.log('problem.....');
  }
  const resData = request.json();
  return {
    type: 'LOGIN',
    resData.localId,
    resData.idToken,
  };
};

export const signup = (email, password) => {
  const request = fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIIBZrVLnr7ny4qGZlWkYj46LE3xZjPfg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    },
  ).then(response => response.data);

  return {
    type: 'SIGNUP',
    payload: request,
  };
};
