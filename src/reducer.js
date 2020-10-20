export const initialState = {
  currentCalendarData:null,
  currentMeetingTime: "03:30",
  displayModalStart: true,
  displayModalEnd: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "displayModalStartTrue":
      return {
        ...state,
        displayModalStart: true,
      };
    case "displayModalStartFalse":
      return {
        ...state,
        displayModalStart: false,
      };
    case "displayModalEndTrue":
      return {
        ...state,
        displayModalEnd: true,
      };
    case "displayModalEndFalse":
      return {
        ...state,
        displayModalEnd: false,
      };
    case "fetchCurrentWeeksCalendarData":
      return {
        ...state,
        currentCalendarData:action.payload


      }
    default:
      return { ...state };
  }
};

