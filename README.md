# QuBit Programming test

## The Problem
The task is to create a JavaScript selection engine i.e. a JavaScript function that will return DOM elements given a CSS selector.

Rules:
1) You can only modify and submit Answer.js
2) You may not use any JavaScript libraries
3) document.querySelector/document.querySelectorAll may not be used.

### Thought Process
Initially, I thought that the best way to approach this was to extract the list of classes from the DOM and store it into an array. Then match the selector that was being passed in the function with the array of classes. However, the more I dove into this solution, the more I realised it would have perfomance issues, as you can see from my unrefined solution, there are loops nested inside loops, which would give that solution an order of O(N^2), which was not desirable in terms of performance.

After heavily researching on what I could do to improve this, I came across a method called document.createTreeWalker(),which returns a TreeWalker object that basically represents all the nodes of the document subtrees and position within them. Then I created a while loop that loops through the object and finds and returns the element that matches the selector is passed through the function.

### Running the code
In the terminal, type the command "open Test.html" which will open the file in the browser, then run the function with the selectors passed into it.