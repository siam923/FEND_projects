import { view_prev } from "../helper"

describe("Is btn working", () => {
  test("It will return True", () => {
    let ourData = [
      {theSummary:"Possible Light Rain",
       theLow:"42.32",
       theHigh:"57.85",
       theImage: "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
       tripDays:"3 days away",
       mainTripDifference:8,
       departureDate: "02/12/2020",
       fromText: "Paris, France",
       theSummar: "Mostly cloudy throughout the day."
     }];

     expect(view_prev(ourData, test=true)).toEqual(ourData);

  })
})
