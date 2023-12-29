export const initialState = {
  displayModalStart: false,
  displayModalEnd: false,
  errorMessage: "",
  fetchedScheduleData: false,
  isSelected: false,
  blogs:null,
  id_to_blog: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "newErrorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };
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
    case "fetchBlogData":
        console.log(action.payload)
      return {
        ...state,
        blogs:action.payload["blogEntries"],
      };
    default:
      console.log(state);
      return { ...state };
  }
};
