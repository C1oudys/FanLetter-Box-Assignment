const ADD_FAN_LETTER = "fanLetters/ADD_FAN_LETTER";
const EDIT_FAN_LETTER = "fanLetters/EDIT_FAN_LETTER";
const DELETE_FAN_LETTER = "fanLetters/DELETE_FAN_LETTER";

const initialState = {
  fanLetters: [],
};

export const addFanLetter = (fanLetter) => ({
  type: ADD_FAN_LETTER,
  payload: fanLetter,
});

export const editFanLetter = (id, content) => ({
  type: EDIT_FAN_LETTER,
  payload: { id, content },
});

export const deleteFanLetter = (id) => ({
  type: DELETE_FAN_LETTER,
  payload: id,
});

const fanLettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAN_LETTER:
      return {
        ...state,
        fanLetters: [...state.fanLetters, action.payload],
      };
    case EDIT_FAN_LETTER:
      return {
        ...state,
        fanLetters: state.fanLetters.map((letter) =>
          letter.id === action.payload.id
            ? { ...letter, content: action.payload.content }
            : letter
        ),
      };
    case DELETE_FAN_LETTER:
      return {
        ...state,
        fanLetters: state.fanLetters.filter(
          (letter) => letter.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default fanLettersReducer;
