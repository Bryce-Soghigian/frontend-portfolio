function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

export const getStartDate = () =>{

  let monday = getMonday(new Date())
  var dd = String(monday.getDate()).padStart(2, '0');
  var mm = String(monday.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = monday.getFullYear();
 let startDate = `${mm}${dd}${yyyy}`
 console.log(startDate)
  return startDate
}
export const getEndDate = () => {
  function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }
  let startDate = getMonday(new Date())
  startDate.setDate(startDate.getDate()+14)
  var dd = String(startDate.getDate()).padStart(2, '0');
  var mm = String(startDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = startDate.getFullYear();
  let endDate = `${mm}${dd}${yyyy}`
  return endDate
}

