const initialState = {
  isOpen: false,
};

const popup1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP_1':
      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_POPUP_1':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default popup1Reducer;