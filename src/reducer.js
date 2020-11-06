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
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "requestZoomMeeting":
      let requestObjectZoomMeeting = {
        email: action.payload,
        currentDate: state.currentMeetingTime.fullDate,
      };
      requestObjectZoomMeeting[state.currentMeetingTime.time] = "Phone Interview";
      Axios.put(`http://localhost:5555/api/v1/contact/zoom`, requestObjectZoomMeeting)
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
      return { ...state };
    case "requestPhoneMeeting":
      let requestObject = {
        email: action.payload,
        currentDate: state.currentMeetingTime.fullDate,
      };
      requestObject[state.currentMeetingTime.time] = "Phone Interview";
      Axios.put(`http://localhost:5555/api/v1/contact/phone`, requestObject)
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
      return { ...state };
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
        let formatedStartDate =
          currentDate.slice(0, 2) +
          "-" +
          currentDate.slice(2, 4) +
          "-" +
          currentDate.slice(6);
        formatedStartDate = new Date(formatedStartDate);
        formatedStartDate.setDate(formatedStartDate.getDate() + 7);
        var dd = String(formatedStartDate.getDate()).padStart(2, "0");
        var mm = String(formatedStartDate.getMonth() + 1).padStart(2, "0");
        var yyyy = formatedStartDate.getFullYear();
        let newStartDate = `${mm}${dd}${yyyy}`;

        //Calculate new end date

        let currentEndDate = state.currentDateRange[1].endDate;
        let formatedEndDate =
          currentEndDate.slice(0, 2) +
          "-" +
          currentEndDate.slice(2, 4) +
          "-" +
          currentEndDate.slice(6);
        formatedEndDate = new Date(formatedEndDate);
        formatedEndDate.setDate(formatedEndDate.getDate() + 7);
        var d = String(formatedEndDate.getDate()).padStart(2, "0");
        var m = String(formatedEndDate.getMonth() + 1).padStart(2, "0");
        var yy = formatedEndDate.getFullYear();
        let newEndDate = `${m}${d}${yy}`;

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

      //Calculate new start date

      let currentDate = state.currentDateRange[0].startDate;
      console.log(currentDate);
      let formatedStartDate =
        currentDate.slice(0, 2) +
        "-" +
        currentDate.slice(2, 4) +
        "-" +
        currentDate.slice(6);
      formatedStartDate = new Date(formatedStartDate);
      formatedStartDate.setDate(formatedStartDate.getDate() - 7);
      var dd = String(formatedStartDate.getDate()).padStart(2, "0");
      var mm = String(formatedStartDate.getMonth() + 1).padStart(2, "0");
      var yyyy = formatedStartDate.getFullYear();
      let newStartDate = `${mm}${dd}${yyyy}`;

      //Calculate new end date

      let currentEndDate = state.currentDateRange[1].endDate;
      let formatedEndDate =
        currentEndDate.slice(0, 2) +
        "-" +
        currentEndDate.slice(2, 4) +
        "-" +
        currentEndDate.slice(6);
      formatedEndDate = new Date(formatedEndDate);
      formatedEndDate.setDate(formatedEndDate.getDate() - 7);
      var d = String(formatedEndDate.getDate()).padStart(2, "0");
      var m = String(formatedEndDate.getMonth() + 1).padStart(2, "0");
      var yy = formatedEndDate.getFullYear();
      let newEndDate = `${m}${d}${yy}`;

      return {
        ...state,
        currentDateRange: [
          { startDate: newStartDate },
          { endDate: newEndDate },
        ],
      };
    case "newErrorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "fetchScheduleData":
      let data = action.payload;
      //Using bubble sort since the array is of length 8 and i think it is very readable in this case
     
    data = data.sort((a,b) => {
      if(a.currentDate <b.currentDate){
        return -1
      }
      if(a.currentDate > b.currentDate){
        return 1
      }
      return 0
    })
      console.log(data,"DATA AFTER SORT")

      let results = [];
      let freeTimes = [];
      results.push(data);
      results.map(x =>
        x.map(x => {
          let filteredData = { freeTimesArray: [] };
           
          for (let key in x) {
            if (key === "currentDate") {
              let date = x[key];
              let formatedDate =
                date.slice(0, 2) + "-" + date.slice(2, 4) + "-" + date.slice(6);
              let day = new Date(formatedDate).toString().split(" ");
              filteredData["day"] = day[0];
              filteredData["date"] = `${day[1]} ${day[2]}`;
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
      console.log(state)
      return { ...state };
  }
};
