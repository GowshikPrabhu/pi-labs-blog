# Basics of Markdown
Markdown is the most popular markup language that can be used to format documents. It can be used to create *websites*,*ebooks*,*email*,*chats in discussions forums*.

## Topics
1. Paragraphs 

    MD expects a full line space to show texts in a different line else it joins text in the same line.
2.  Text decorations

    MD can write **bold** texts, ~~italiic~~ *italic*  texts
3. Headings
    No of #'s represent the type of heading. Github will automatically add id's to headings, so the text will be automatically linked. 
    ## This is h2
    ### This is h3
4. Links

   [My Github](https://github.com/bhupendra1011 "all repos") account.[Bhupendra][1] github repo.

5. Images
    Images can be used just like links. ![Alt txt](img url)

    !["cat Img"](http://placekitten.com/200/200)

    Thumbnails images can also be used which links to larger image 
    [<img src="http://placekitten.com/20/20">](http://placekitten.com/200/200)

6. Ordered and Unordered Lists

    Coding Best Practices:

    * Keep code DRY
    * Writing Unit Test cases
    * Checking cross-browser support

    Steps to merge branch:

  1. Create a branch from feature
  2. commit your changes
  3. push your changes
  4. raise a pull request

7. Code Blocks

    This is super helpful when posting any code snippet



<BlockCode
language='jsx'
code={`import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import \* as serviceWorker from './serviceWorker';
const fn = () =escrarr<> alert('some fn');
ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();`}
/>



<BlockCode 
  language='css' 
  code={`.hide {
    display: none;
  }`}
/>


    Also can show code difference


    ```diff
    var x = 10;
    - const counter = 0;
    + let counter = 0
    ```



8. Tables 

    Tables can be generated with headings and text alignment option

    |Stocks|Price|Something
    |:-----:|------:|-----:|
    |TCS|230|Else|
    |YES Bank|500|If|


9. Block Quotes

    > Hello, this is something said by the great Gowshik Prabhu
    > Yeah, you know who I am

<PreFormattedBox 
content={`Step 1: Start
Step 2: Declare variables n, i, flag.
Step 3: Initialize variables
        flag ← 1
        i ← 2  
Step 4: Read n from the user.
Step 5: Repeat the steps until i=(n/2)
     5.1 If remainder of n÷i equals 0
            flag ← 0
            Go to step 6
     5.2 i ← i+1
Step 6: If flag = 0
           Display n is not prime
        else
           Display n is prime
Step 7: Stop`}
/>


Cool Tips 

 * [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) extension can eliminate typo and grammar mistakes
 * [ScreenTOGif](https://www.screentogif.com/) to record videos in GIF format
 * Upload GIF's to [giphy](https://giphy.com/) to embed them into blog posts.
 * [Stackedit](https://stackedit.io/) for Markdown Editing in Browser.