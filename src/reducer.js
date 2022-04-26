// export const initialState = {
//   user: "null",
// };

// export const actionsTypes = {
//   SET_USER: "SET_USER",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case actionsTypes.SET_USER:
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer

export const initialState = {
  user: null,
  uid: null,
  togglerState: 1,
  photoURL: "",
};

export const actionsTypes = {
  SET_USER: "SET_USER",
  SET_SESSION: "SET_SESSION",
  SET_TOGGLER: "SET_TOGGLER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionsTypes.SET_SESSION:
      localStorage.setItem("uid", action.uid);
      localStorage.setItem("displayName", action.displayName);
      localStorage.setItem("photoURL", action.photoURL);
      console.log("session added to storage");
      return {
        ...state,
        uid: action.uid,
        displayName: action.displayName,
        photoURL: action.photoURL,
      };
    case actionsTypes.SET_TOGGLER:
      return {
        ...state,
        togglerState: action.togglerState,
      };

    default:
      return state;
  }
};

export default reducer;
