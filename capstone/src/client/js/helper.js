const view_prev = (demoData, test=false) => {
   if(!test) {
     let cityImage = document.getElementById('city-img');
     cityImage.src = demoData[0].theImage;

     let high = document.getElementById('high');
     high.textContent = demoData[0].theHigh;

     let low = document.getElementById('low');
     low.textContent = demoData[0].theLow;

     let summary = document.getElementById('summary');
     summary.textContent = demoData[0].theSummary;

     let theDepartingDate = document.getElementById('departingDate');
     theDepartingDate.textContent = demoData[0].departureDate;

     let theLocation = document.getElementById('departingLocation');
     theLocation.textContent = demoData[0].fromText;

     let theMainLocation = document.getElementById('mainLocation');
     theMainLocation.textContent = demoData[0].fromText;

     let theTimeSpan = document.getElementById('timeSpan');
     theTimeSpan.textContent = demoData[0].tripDays;

     let tripLengthDuration = document.getElementById('tripLength');
     tripLengthDuration.textContent = demoData[0].mainTripDifference + " Days";
   }
   return demoData

}

export {
    view_prev
}
