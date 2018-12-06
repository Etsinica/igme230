
$(".mainmenu").click(function () {
    $(this).next().slideToggle("slow");
});

'use strict';
        let contentChoose = document.querySelector('input'); // the select menu
        let contentDisplay = document.querySelector('article'); // the space for the verse to display
        let content = "article0.txt"; // the chosen verse; initialize with first menu option
        updateContent(content);

        function updateContent(content) {
            let verseRequest = new XMLHttpRequest(); // defines a specific request
            verseRequest.open('GET', content); 
            verseRequest.responseType = 'text'; 
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