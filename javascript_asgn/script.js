// Variables:

// 1. Declare variables for the following and assign appropriate values:
//    - Your name
//    - Your age
//    - Your city
//    - A boolean value indicating whether you are a student
//    - A null value
//    - An undefined value

let name = "Rashmika"; 
let age = 20; 
let city = "Visakhapatnam";
let isStudent = true; 
let nullValue = null;
let undefinedValue;

document.write("Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("City: " + city + "<br>");
document.write("Is Student: " + isStudent + "<br>");
document.write("Null Value: " + nullValue + "<br>");
document.write("Undefined Value: " + undefinedValue + "<br>");

// 2. Create a variable `pi` and assign it the value of pi (3.14159).
let pi;
pi= 3.14159;
document.write("Pi: " + pi + "<br>");

// 3.Create a variable greeting and assign it a string that says "Hello, world!":
let greeting;
greeting = "Hello, world!";
document.write(greeting + "<br>");

// 4. Create a variable `isSunny` and assign it a boolean value indicating whether it's sunny outside.
let isSunny;
isSunny = true;
document.write("Is it Sunny? " + isSunny + "<br>");

// 5. Create a variable `favoriteNumber` and assign it your favorite number.
let favoriteNumber;
favoriteNumber = 7;
document.write("Favorite Number: " + favoriteNumber + "<br>");

// Data Types:

// 1. Print the data type of each variable you created in the previous section using the `typeof` operator.
document.write("Type of Name: " + typeof name + "<br>");
document.write("Type of Age: " + typeof age + "<br>");
document.write("Type of City: " + typeof city + "<br>");
document.write("Type of Is Student: " + typeof isStudent + "<br>");
document.write("Type of Null Value: " + typeof nullValue + "<br>");
document.write("Type of Undefined Value: " + typeof undefinedValue + "<br>");
document.write("Type of Pi: " + typeof pi + "<br>");
document.write("Type of Greeting: " + typeof greeting + "<br>");
document.write("Type of Is it Sunny: " + typeof isSunny + "<br>");
document.write("Type of Favorite Number: " + typeof favoriteNumber + "<br>");

// 2. Create a variable `mixedValue` and assign it a value of your choice that includes multiple data types (e.g., a string, a number, and a boolean).
let mixedValue = "Hello" + 77 + true;
document.write("Mixed Value: " + mixedValue + "<br>");

// 3. Print the data type of `mixedValue`.
document.write("Type of Mixed Value: " + typeof mixedValue + "<br>");

// Operators:

// 1. Perform the following arithmetic operations using variables:
//    - Addition
//    - Subtraction
//    - Multiplication
//    - Division
//    - Modulus (remainder)
//    - Exponentiation
let num1 = 10;
let num2 = 5;
document.write("Addition: " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br>");
document.write("Exponentiation: " + (num1 ** 2) + "<br>");

// 2. Use comparison operators to compare the values of variables:
//    - Equal to (==)
//    - Not equal to (!=)
//    - Greater than (>)
//    - Less than (<)
//    - Greater than or equal to (>=)
//    - Less than or equal to (<=)
document.write("Equal to: " + (num1 == num2) + "<br>");
document.write("Not equal to: " + (num1 != num2) + "<br>");
document.write("Greater than: " + (num1 > num2) + "<br>");
document.write("Less than: " + (num1 < num2) + "<br>");
document.write("Greater than or equal to: " + (num1 >= num2) + "<br>");
document.write("Less than or equal to: " + (num1 <= num2) + "<br>");


// 3. Use logical operators to combine conditions:
//    - AND (&&)
//    - OR (||)
//    - NOT (!)
let isWeekend = true;
let hasHomework = false;

document.write("AND: " + (isWeekend && hasHomework) + "<br>");
document.write("OR: " + (isWeekend || hasHomework) + "<br>");
document.write("NOT: " + (!isWeekend) + "<br>");

// 4. Use the ternary operator to conditionally assign a value to a variable.
let timeOfDay = "morning";
let greetingMessage = timeOfDay === "morning" ? "Good morning!" : "Hello!";
document.write("Greeting Message: " + greetingMessage + "<br>");

// Additional Tasks:

// 1. Create a variable `temperature` and assign it a temperature value in Fahrenheit.
let temperature = 75;

// 2. Convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
let celsius = (temperature - 32) * 5 / 9;
document.write("Temperature in Celsius: " + celsius + "<br>");

// 3. Print the converted temperature.
let age = 25;

if (age < 18) {
    document.write("You are a minor.<br>");
} else if (age >= 18 && age < 65) {
    document.write("You are an adult.<br>");
} else {
    document.write("You are a senior citizen.<br>");
}

// 4. Create a variable `age` and assign it a value.
// 5. Determine whether the person is a minor, an adult, or a senior citizen based on the age.
// 6. Print the appropriate message.
let age = 25;
if (age < 18) {
    document.write("You are a minor.<br>");
} else if (age >= 18 && age < 65) {
    document.write("You are an adult.<br>");
} else {
    document.write("You are a senior citizen.<br>");
}
