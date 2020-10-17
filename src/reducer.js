const initialState = {
    currentMeetingTime:"03:30",
    displayModalStart:false,
    displayModalEnd:false,
}


const reducer = (state , action) =>{
    switch(action.type){
        case "displayModalStartTrue":
            return {
                ...state,
                displayModalStart:true
            }
        case 'displayModalStartFalse':
            return {
                ...state,
                displayModalStart:false
            }
        case "displayModalEndTrue":
            return {
                ...state,
                displayModalEnd:true
            }
        case "displayModalEndFalse":
            return {
                ...state,
                displayModalEnd:false
            }
        default:
            return {...state}
        
    }
}
module.exports = {reducer , initialState}