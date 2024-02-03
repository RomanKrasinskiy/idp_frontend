const initialState = {
  isOpen: false,
};

const popup2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPUP_2':
      return {
        ...state,
        isOpen: true,
      };
    case 'CLOSE_POPUP_2':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default popup2Reducer;