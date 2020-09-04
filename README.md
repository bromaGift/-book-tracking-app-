# -book-tracking-app-
This is the final project for the openclassrooms' learn programming with javascript course. The Book.js consists of a class Book which has a method to alter

Implement book list
After your work on the video streaming website, you are asked to help out with an app which allows users to keep track of the books they are reading/have read.

Your job is to create the Book class and to populate the development database with three or four books to make sure the interface works properly.

Tasks
In the Book.js file, create a Book class.

This class must have the following fields: title: the title of the book (string) author: the author of the book (string) pages: the total number of pages (number) description: a short description of the book (string) currentPage: the page the user is currently on (number, default is 1) read: whether or not the user has read the book (boolean)

The Book class must have the instance method readBook which takes a page number as an argument. This method will be called for the user to indicate the current page they are on for each book.

-- if the page number passed is invalid, warn the user and do not change the instance's values -- otherwise, set the currentPage value to the received argument -- if the currentPage is the last page of the book, the book is considered read Now, in database.js, create three or four instances of the Book class (using the new keyword).

Create a bookList array which contains these instances.

Refresh the built-in browser. Each book should appear as an item in the list, with all of its attributes. Entering a number into the 'Current page' field and hitting 'Update' should update the page count and, if the user has finished the book, the frame should turn green.
