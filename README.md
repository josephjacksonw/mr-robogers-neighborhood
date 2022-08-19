make a web app that takes input from a user
it returns a list of values from 0 to the inputted number with changes to the list
all numbers with a 1,2, or 3 in them get changed 
use a loop (ill have to p easily)
if a new number is put in, the old result is replaced by the new one
output every number up to the thing
do TDD

so really all we have to do is find the number and output the list

TDD

Describe: welcomeMessage()

Test: "it should be able to recognize a user's input
Code:
const input = "123";
welcomeMessage(input);
Expected Output: "123"

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

Test: 
Code:

Expected Output: 

Test: 
Code:

Expected Output: 

Test: 
Code:

Expected Output: 

Test: 
Code:

Expected Output: 

Test: 
Code:

Expected Output: 