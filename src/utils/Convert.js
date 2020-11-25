export const convertToAmOrPm = meetingTime => {
  let meetingTimeArray = meetingTime.split(":");
  if (Number(meetingTimeArray[0]) < 12) {
    meetingTime += " am";
  } else {
    if (Number(meetingTimeArray[0]) === 12) {
      meetingTime += " pm";
    } else {
      let convertedFromMilitaryTime = Number(meetingTimeArray[0] - 12);
      meetingTime = `${convertedFromMilitaryTime}:00 pm`;
    }
  }
  return meetingTime;
};
