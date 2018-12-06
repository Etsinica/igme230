/* Don't use <script> tags in a linked js file! */
$(function () {
    $('#blah').removeClass('hidden');
});

$(".menuitem").click(function () {
    $(this).next().slideToggle("slow");
});

'use strict';
        let contentChoose = document.querySelector('select'); // the select menu
        let contentDisplay = document.querySelector('#content'); // the space for the verse to display
        let content = "content1.txt"; // the chosen verse; initialize with first menu option
        updateContent(content);

        function updateContent(content) {
            let verseRequest = new XMLHttpRequest(); // defines a specific request
            verseRequest.open('GET', content); // specifies what to do when request is sent
            verseRequest.responseType = 'text'; // specifies that the files should be treated as text
            verseRequest.onload = function() { // specifies what to do when file is loaded
                contentDisplay.innerHTML = verseRequest.response; // place the response text in the selected element
            };
            verseRequest.send(); // actually sends the request
        };

        contentChoose.onchange = function() {
            content = contentChoose.value;
            updateContent(content);
        };

        contentChoose.value = content; // shows initial menu option
        updateContent(content); // shows intial content