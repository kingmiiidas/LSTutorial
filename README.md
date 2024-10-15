# Storing, Accessing, and displaying JSON data in local storage

## Introduction:
This tutorial was made to provide you with knowledge of the basics when it comes to storing, accessing, and displaying JSON data from the local storage. This tutorial is meant to provide the reader with a basic understanding, but will also provide some insight into how it can be used to secure data and prevent cross-site scripting.

In order to participate, you will need an editor (I am using VS code) as well as a browser of your choice (as long as it stores local storage. I am using google). This tutorial uses JavaScript and HTML, two very basic languages to create a website without getting super fancy (we will not use css since we are developers, not artists). Local storage only remains active for that specific session of a browser, so if you want to learn how to create a login that will store information in a database, this is not the tutorial you are looking for (cue Obi wan waving his hand).

Let’s dive right in!

## Tutorial:
Perhaps when you were in middle school, this weird kid in your class who always wore a suit showed you his screen in the computer lab once, and instead of saying “gmail” in the top right of the google homepage, you saw “Free Minecraft Skins” and decided this kid had a way better computer than you. Well, he is not a wizard, nor is he special in the eyes of Minecraft. He changed one of the variables in the Local Storage, which changed what was displayed on the screen.

Let’s try it. But instead of changing our gmail link to mention one of the greatest games ever created, let's start from scratch. We are going to start off by making an empty directory. We can call it “LSTutorial”. Next we will add two files: `index.html` and `script.js`. Now you should have something that looks like this:

Now we are going to add something simple. We are going to make a student directory with a first name, a last name, and an area of study. We will start out by creating a simple html that will allow a user to input the information. We will add a form that will call our `createStudent` function and we will add an id so that our js file can identify correctly with it.

### 3. Next, we have the JavaScript portion of the code. To do this, we need what is called a constructor, which will look something like this in our `script.js` file:

The purpose of a constructor is to create a new object and a set of values for any existing object. An example would be a car. A car is the object, but each car has certain values like the make, the model, and the color.

### 4. After creating the constructor, we need to create an empty array so that each student entered into our local storage will be organized and grouped together. We can do this very simply:

### 5. After creating our empty array where we will store the information about each student, we will need to add some type of trigger so that when the user is done entering in the information, it will cause the data to be put into the array. We can do this by adding an event listener:

### 6. After creating an event listener, we notice that we still cannot submit data into our local storage. We need to create a function called `createStudent` that will allow us to pass in the event submission, which will pass in all of our student data. We will add a console message to show us that we have actually called the correct function, a safety measure to ensure that empty data is not submitted, a command that will pull data from the DOM, another command that will create a new student object, a command that will push our data into the array, and finally our `JSON.stringify` command, which will add the student to the local storage in the form of a string. Your code should look something like this:

We are almost done! Now when we add a student, it should look something like this. We can use the application portion of `ctrl+shift+i` to open up the local storage and see what is being added and taken away from it.

This is awesome! We can actually see how and where our data is being stored. What we have done so far is create a means whereby a user can enter in information in the form of an object. This object is then converted into a string with the `stringify` command that is universally used. This string is then added to our local storage, and pulling it back into use as an object is as simple as converting from an object to a string.

### 7. Let’s create some more JavaScript that will add what we have created to the page, so the user can see all of the students that are in the local storage. We are going to start off by creating a function called `toHTML` that will convert our string into readable HTML that will be inserted into our existing `index.html` file. It will need to be added inside of our `Student` class. We will start by adding another console message, telling us that the function is being called. We will then return some html: We will use `span` and then the `$` from JavaScript to insert our variables into the html code. We will add line breaks to make it a little bit more readable. When we are done we should get something like this:

### 8. When this is done, we need to make sure that it is being properly added to the document. We can do this by using the `innerHTML` command, which will add each student in the array of students to the html file. It will look like this in the `createStudent` function:

### 9. NICE! We are so very close to being done now. What we have done up to this point is make a function that will not only add our data to the local storage, but it will write html to the DOM so that it can be displayed to the user after they add it. Here is an example of it being displayed on the page:

A word of caution: Do NOT use `innerHTML`. This command will leave you vulnerable to Cross-Site Scripting. Instead, we will use the `textContent` command, which treats any content as simple text rather than html code that uses executable JavaScript code.

## Additional Learning:
- [Storing, Accessing, and displaying JSON data in local storage](https://offsec01.medium.com/storing-accessing-and-displaying-json-data-in-local-storage-pe-d4ef8e509e31)
- [A Tutorial on using JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)
- [YouTube Video](https://www.youtube.com/watch?app=desktop&v=UJ4TC-MTox0&ab_channel=RamNJava)
