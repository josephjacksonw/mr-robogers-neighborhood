# Mr Robogers Neighborhood

#### By Joseph Jackson

#### A simple JavaScript form for looping through data

[Click Here to View the Page](https://josephjacksonw.github.io/mr-robogers-neighborhood/)

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap

## Description

This website lets users submit a number and will output a counted array with some numbers altered.

Any number that contains a 3, 2, or 1 will instead have a statment from Mr. Robogers!

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known bugs

* None

## License

MIT

Copyright (c) Joseph Jackson



TDD

Describe: welcomeMessage()

Test: "it should be able to recognize a user's input
Code:
const input = "123";
welcomeMessage(input);
Expected Output: "123"

Test: it should output an error if the number is not a positive integer
Code:
const input = -12

Describe buildArr()

Test: "it should create an array of counting numbers up to the submitted input
Code:
const input = 5;
buildArr(input);
Expected Output: 0, 1, 2, 3, 4, 5

Test: it should identify 3, 2, and 1 and push a different output
Code: 
const input = 5;
buildArr(input);
Expected Output: 0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5