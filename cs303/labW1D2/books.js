"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function addBook(){
    const libraryBooks=[]
     const newTitle=document.getElementById("title").value;
    const newAuthor=document.getElementById("author").value;
    const newLibraryId=document.getElementById("libraryID").value;
    
    const newBook={}
    newBook.Title=newTitle,
    newBook.author=newAuthor,
    newBook.LibraryID=newLibraryId
    for (let item in newBook){
        library.push(item);
    }document.getElementById("displayArea").innerHTML=libraryBook;
}



function showTitles() {
   

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    // implement this and other functions
    return titles;
}
