// src/redux/reducers/userReducer.js
export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
