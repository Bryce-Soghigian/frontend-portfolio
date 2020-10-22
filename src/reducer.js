export const initialState = {
  currentCalendarData:null,
  currentMeetingTime: "03:30",
  displayModalStart: false,
  displayModalEnd: false,
  scheduleData:[]
};

export const reducer = (state, action) => {
  switch (action.type) {
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
        // for(let i =0;i< results.length;i++){
        //   let currentObject= results[i]
        //   console.log(currentObject)
          // console.log(Object.keys(currentObject.data),"curr")
          //Go through each object and push the date and the free times into a new object
          // let filteredData = {}

          // for(let key in currentObject.data){
          //   console.log(key)
          //     if(key === "currentDate"){
          //         filteredData[key] = currentObject[key]
          //     }else if(currentObject[key] === "free"){
          //         filteredData[key] = currentObject[key]
          //     }
          // }
          // freeTimes.push(filteredData)
        // }
        // console.log(freeTimes,"free times")
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

