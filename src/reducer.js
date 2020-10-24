import { getStartDate,getEndDate } from "./utils/DateRangeHelpers";



export const initialState = {
  currentCalendarData:null,
  currentMeetingTime: "03:30",
  displayModalStart: false,
  displayModalEnd: false,
  currentDateRange:[{startDate:getStartDate()},{endDate:getEndDate()}],
  errorMessage:"",
  scheduleData:[]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "newErrorMessage":
      return {
        ...state,
        errorMessage:action.payload
      }
    case "fetchScheduleData":
      let data = action.payload
      let results = [];
      let freeTimes = [];
        results.push(data)
        console.log(results,"results array")
        results.map(x => x.map(x =>{
          console.log(x)
          let filteredData = {}

          for(let key in x){
              if(key === "currentDate"){
                let date = x[key]
                let formatedDate = date.slice(0,2) + "-"+date.slice(2,4)+ "-" + date.slice(6)
                console.log(formatedDate,"new date")
                let day = new Date(formatedDate).toString().split(" ")
                console.log(day)
                  filteredData["day"] = day[0]
                  filteredData["date"] = `${day[1]} ${day[2]}`
                  filteredData[key] = x[key]
              }else if(x[key] === "free"){
                  filteredData[key] = x[key]
              }
          }
          freeTimes.push(filteredData)
        }))
      return {
        ...state,
        scheduleData:freeTimes
      }
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

