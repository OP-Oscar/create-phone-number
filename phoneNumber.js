// Create a Phone Number

// Difficulty
// Medium
// Concepts
// General, Loops

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!


let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // => returns "(123) 456-7890"

console.log(-1< 0 || -1 >10)

//function that accepts an array of 10 digits
function createPhoneNumber(arr){
        let condition = 1
        for(val of arr){
            if(val < 0 || val > 10){
                condition = 0
             }
        }
        console.log(condition)
        if(arr.length != 10){
            return "Array must be of 10 values"
        }else if( condition = 1){
            return "Array must have numbers between 0 and 10"
        }
        else{
    let phoneNumber = arr
    // add opening parenthesis at 0
    phoneNumber.splice(0,0,"(")

    //add closing parenthesis and space at 4
    phoneNumber.splice(4,0,") ")

    //add - at 8
    phoneNumber.splice(8,0,"-")

    //convert list to string
    //return string value from list
    return phoneNumber.join("")}

}

console.log(createPhoneNumber(numArray))