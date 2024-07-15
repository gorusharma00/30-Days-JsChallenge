// Task 4
const day = 2;

switch(day){
    case 1:
        console.log("This is Monday");
        break;
    
    case 2:
        console.log("This is Tuesday");
        break;

    case 3:
        console.log("This is Wednesday");
        break;

    case 4:
        console.log("This is Thursday");
        break;

    case 5:
        console.log("This is Friday");
        break;
    
    case 6:
        console.log("This is Saturday");
        break;
    
    default:
        console.log("This is Sunday");
}

// Task 5

/*
Using a switch statement for range conditions is not straightforward in JavaScript because switch is designed for discrete values, not ranges. However, you can use a trick by grouping cases together and leveraging the true value in the switch statement. 
*/

let marks = 86;

switch(true){
    case (marks<= 100 && marks >=90) :
        console.log("A");
        break;
    
    case  (marks< 90  && marks >=80):
        console.log("B");
        break;

    case  (marks< 80 && marks >=70):
        console.log("C");
        break;

    case  (marks< 70 && marks >=60):
        console.log("D");
        break;
    
    default:
        console.log("F");
}