'use strict';

(function(){
    var insertText = document.getElementById("insert-text"),
        insertButtonTag = document.getElementById("insert-button-tag"),
        insertButtonElement = document.getElementById("insert-button-element"),
        output = document.getElementById("output");

    insertButtonTag.addEventListener("click", function(){
        var newDiv = '<div class="fancy-box1">' + insertText.value + ' from tag</div>';

        output.innerHTML += newDiv;
    });
    insertButtonElement.addEventListener("click",function(){
        var newDiv = document.createElement("div");


        newDiv.innerText = insertText.value + " from element";
        newDiv.classList.add("fancy-box2");

        output.appendChild(newDiv);
        
        
    });

})();