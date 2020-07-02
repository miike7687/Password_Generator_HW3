# 03 JavaScript: Password Generator

# Unit 03 Javascript Homework: Random Password Generator

For this assignment, I added javascript code to create a random password generator based on user's input from different prompts.

## Early Steps: Starting Data

I split my work into 3 sections: Starting Data, Updated Data, and Display updated data.

-I psuedo-coded my process, trying to write in plain English text as much as possible to break down steps for myself. This allowed me to test each section and to know exactly what I was testing for.

-For my starting data, I assigned value to a number of different variables, including the arrays of numbers, special characters, lowercase letters, and uppercase letters.

-I used console.log to check that all my arrays were printing the correct information.

**For some reason, my Javascript wrapped the text of my upper and lower letters so there was only 1 letter per line, so I need to figure out how to get rid of that feature!**

## Step 2: Update the data

- I created a function to generate the password.

Within the function:

- I created one prompt and four confirms that asked the user to choose their parameters for their password length and content.

- I repeated back to them the length they selected.

- I created an alert just in case they chose a length outside of the parameters, and had them repeat with a while loop if necessary.

- I created an alert just in case they selected "cancel" for all 4 character parameters, and had them repeat with a while loop if necessary.

- I created separate "if" statements that concatenated all of the confirmed characters they wanted in their password to make sure all characters were combined into a string.

- Once again, I used console.log to test it out to make sure the pool of characters was accurate based on user input.

## Step 3: Display updated data

- I created an empty set array called "finalPassword" so that I knew this was what I was actually aiming for.

- I created a for loop that ran through the pool of characters a set number of times based on the user's choice of password length.

  - For example, if the user chose a password length of 12 characters, this for loop would run 12 times.

- Within the loop, I used Math.floor and Math.random to select one random character at a time.

- I had to change the = to a += to ensure that characters were being ADDED onto the final string password.

## Finishing Touches

- Checked to see if everything was responsive .

- I researched online how to add another button that could COPY the random password to the user's clipboard. For this button, I had to use the id "password" to ensure the button would copy exactly what popped up in the text box.

- Edited/added semantic HTML to focus on my SEO.

- I went through the acceptance criteria as a checklist one more time to make sure I covered everything I needed to cover:

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria [x]
WHEN prompted for password criteria
THEN I select which criteria to include in the password [x]
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters [x]
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters [x]
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected [x]
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria [x]
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page [x]
```

## Submission on BCS

You are required to submit the following:

- The URLs of the deployed applications (x)

- The URLs of the GitHub repositories (x)
