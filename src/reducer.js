import { getStartDate, getEndDate } from "./utils/DateRangeHelpers";
import Axios from "axios";
import Swal from "sweetalert2";
export const initialState = {
  currentCalendarData: null,
  currentMeetingTime: "03:30",
  displayModalStart: false,
  displayModalEnd: false,
  currentDateRange: [{ startDate: getStartDate() }, { endDate: getEndDate() }],
  errorMessage: "",
  fetchedScheduleData: false,
  scheduleData: [],
  currentMeetingType: "",
  currentUserEmail: "",
  isSelected: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "requestZoomMeeting":
      let requestObjectZoomMeeting = {
        email: action.payload,
        currentDate: state.currentMeetingTime.fullDate,
      };
      requestObjectZoomMeeting[state.currentMeetingTime.time] =
        `Zoom meeting with ${action.payload}`;
      console.log(requestObjectZoomMeeting, "zoom obj");
      Axios.put(
        `https://scheduling-api-bryce-portfolio.herokuapp.com/api/v1/contact/zoom`,
        requestObjectZoomMeeting,
      )
        .then(res => {
          Swal.fire(
            "Thanks for scheduing a meeting!",
            "Check your email for the zoom url for our meeting",
            "success",
          );
        })
        .catch(err => {
          console.log(err);
          Swal.fire(
            "There was an error with processing your request",
            "Please try again and if the error persists contact me at bsoghigian@gmail.com",
            "error",
          );
        });
      return { ...state, isSelected: !state.isSelected };
    case "requestPhoneMeeting":
      let requestObject = {
        email: action.payload,
        currentDate: state.currentMeetingTime.fullDate,
      };
      requestObject[state.currentMeetingTime.time] = "Phone Interview";
      Axios.put(
        `https://scheduling-api-bryce-portfolio.herokuapp.com/api/v1/contact/phone`,
        requestObject,
      )
        .then(res => {
          Swal.fire(
            "Thanks for scheduing a meeting!",
            "Check your email for your invitation to meet",
            "success",
          );
        })
        .catch(err => {
          console.log(err);
          Swal.fire(
            "There was an error with processing your request",
            "Please try again and if the error persists contact me at bsoghigian@gmail.com",
            "error",
          );
        });
      return { ...state, isSelected: !state.isSelected };
    case "clearCurrentMeetingType":
      return {
        ...state,
        currentMeetingType: "",
      };
    case "handleChangeEmail":
      return {
        ...state,
        currentUserEmail: action.payload,
      };
    case "setMeetingType":
      return {
        ...state,
        currentMeetingType: action.payload,
      };
    case "updateCurrentMeetingTime":
      return {
        ...state,
        currentMeetingTime: action.payload,
      };
    case "handleForward":
      const handleForwardReducer = () => {
        let currentDate = state.currentDateRange[0].startDate;
        let formatedStartDate = `${currentDate.slice(0, 4)}-${currentDate.slice(
          4,
          6,
        )}-${currentDate.slice(6, 8)}`;
        console.log(formatedStartDate);
        formatedStartDate = new Date(formatedStartDate);
        formatedStartDate.setDate(formatedStartDate.getDate() + 8);
        var dd = String(formatedStartDate.getDate()).padStart(2, "0");
        var mm = String(formatedStartDate.getMonth() + 1).padStart(2, "0");
        var yyyy = formatedStartDate.getFullYear();
        let newStartDate = `${yyyy}${mm}${dd}`;

        //Calculate new end date

        let currentEndDate = state.currentDateRange[1].endDate;
        let formatedEndDate = `${currentEndDate.slice(
          0,
          4,
        )}-${currentEndDate.slice(4, 6)}-${currentEndDate.slice(6, 8)}`;
        formatedEndDate = new Date(formatedEndDate);
        formatedEndDate.setDate(formatedEndDate.getDate() + 8);
        var d = String(formatedEndDate.getDate()).padStart(2, "0");
        var m = String(formatedEndDate.getMonth() + 1).padStart(2, "0");
        var yy = formatedEndDate.getFullYear();
        let newEndDate = `${yy}${m}${d}`;
        console.log(newStartDate, "newstart date");
        console.log(newEndDate, "newENddate");
        return [newStartDate, newEndDate];
      };
      let resultsOfForwardReducer = handleForwardReducer();

      return {
        ...state,
        currentDateRange: [
          { startDate: resultsOfForwardReducer[0] },
          { endDate: resultsOfForwardReducer[1] },
        ],
      };

    case "handleBackwards":
      //This function updates the start date by two weeks
      const handleBackwardsHelper = () => {
        let currentDate = state.currentDateRange[0].startDate;
        let formatedStartDate = `${currentDate.slice(0, 4)}-${currentDate.slice(
          4,
          6,
        )}-${currentDate.slice(6, 8)}`;
        console.log(formatedStartDate);
        formatedStartDate = new Date(formatedStartDate);
        console.log(formatedStartDate, "formated start");

        formatedStartDate.setDate(formatedStartDate.getDate() - 6);
        var dd = String(formatedStartDate.getDate()).padStart(2, "0");
        var mm = String(formatedStartDate.getMonth() + 1).padStart(2, "0");
        var yyyy = formatedStartDate.getFullYear();
        let newStartDate = `${yyyy}${mm}${dd}`;

        //Calculate new end date

        let currentEndDate = state.currentDateRange[1].endDate;
        let formatedEndDate = `${currentEndDate.slice(
          0,
          4,
        )}-${currentEndDate.slice(4, 6)}-${currentEndDate.slice(6, 8)}`;
        formatedEndDate = new Date(formatedEndDate);
        formatedEndDate.setDate(formatedEndDate.getDate() - 6);
        var d = String(formatedEndDate.getDate()).padStart(2, "0");
        var m = String(formatedEndDate.getMonth() + 1).padStart(2, "0");
        var yy = formatedEndDate.getFullYear();
        let newEndDate = `${yy}${m}${d}`;
        console.log(newStartDate, "newstart date");
        console.log(newEndDate, "newENddate");
        return [newStartDate, newEndDate];
      };
      //Calculate new start date
      let resultsOfBackwardHelper = handleBackwardsHelper();

      return {
        ...state,
        currentDateRange: [
          { startDate: resultsOfBackwardHelper[0] },
          { endDate: resultsOfBackwardHelper[1] },
        ],
      };
    case "newErrorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "fetchScheduleData":
      let data = action.payload;
      data = data.sort((a, b) => {
        if (a.currentDate < b.currentDate) {
          return -1;
        }
        if (a.currentDate > b.currentDate) {
          return 1;
        }
        return 0;
      });
      let results = [];
      let freeTimes = [];
      const monthsArrayAbbr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      const monthsArray = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]

      results.push(data);
      results.map(x =>
        x.map(x => {
          let filteredData = { freeTimesArray: [] };

          for (let key in x) {
            if (key === "currentDate") {
              let date = x[key];
              let day = new Date(`${date.slice(6, 8)} ${monthsArray[date.slice(4,6)-1]} ${date.slice(0, 4)} ${"20:00"} UTC`).toString().split(" ")
              filteredData["day"] = day[0];
              filteredData["date"] = `${monthsArrayAbbr[date.slice(4,6)-1]} ${date.slice(6, 8)}`;
              filteredData[key] = x[key];
            } else if (x[key] === "free") {
              filteredData.freeTimesArray.push(key);
            }
          }
          return freeTimes.push(filteredData);
        }),
      );

      return {
        ...state,
        scheduleData: freeTimes,
        fetchedScheduleData: true,
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
    case "fetchCurrentWeeksCalendarData":
      return {
        ...state,
        currentCalendarData: action.payload,
      };
    default:
      console.log(state);
      return { ...state };
  }
};
