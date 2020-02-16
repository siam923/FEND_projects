# Landing Page Project

## Project Overview
This project is a part of the front end nanodegree program of Udacity. In this project I have used JavaScript to perform the following tasks:
* Navigation is built dynamically as an unordered list
* which section is being viewed while scrolling through the page
* When clicking an item from the navigation menu, the link should scroll to the appropriate section

## Handling Scroll alternative way:

#### STEP 1:

Add a class to every Nav links same as the id of corresponding section while creating your Nav bar.

For example, the Nav link corresponding to a section having `id="section1"` will have its class set to section1 ( i.e `class="section1`")

#### STEP 2:

On `Scroll` event in the browser, iterate through every sections and check if it is in the view-port ([getBoundingClientRect()](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp)) .

```
If a section is in the view port, make this as well as the corresponding Nav link active as follow-

if (section is in the viewport) {
    // 1. Add "your-active-class" to the current section
    // 2. Add "active" class to the Nav link which have a class same as id of the current section
    } else {
     // 1. Remove "your-active-class" from the current section.
 // 2. Remove "active" class from the Nav link which have a class same as id of current section
    }
```

#### STEP 3:

In you css file, write styles for class "active" and "your-active-class" so that the Nav link and section can be highlighted using different text or background colors.

(edited)

### Resources
* [Sticky, Smooth, Active Nav](https://css-tricks.com/sticky-smooth-active-nav)
* [w3school offsetTop property](https://www.w3schools.com/jsref/prop_element_offsettop.asp)
