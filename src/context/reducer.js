let initialState = {
  allBooks: [],
  allSettingsList: [],
  allUsers: [],
};

const reducerData = (state = initialState, { type, payload }) => {
  switch (type) {
    //::::::::::: MIS REDUCER:::::::::::::
    case "GET_ALL_BOOKS":
      return {
        ...state,
        allBooks: payload,
      };
    //::::::::::: MIS REDUCER:::::::::::::
    //::::::::::: MIS REDUCER:::::::::::::
    case "GET_ALL_SETTINGS":
      return {
        ...state,
        allSettingsList: payload,
      };
    //::::::::::: MIS REDUCER:::::::::::::
    case "GET_ALL_USERS":
      return {
        ...state,
        allUsers: payload,
      };

    default:
      return state; // Si la acción no coincide con ningún caso, devuelve el estado actual sin cambios.
  }
};

export default reducerData;
