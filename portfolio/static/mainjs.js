// Javascript file for my personal Profile website

// Takes value of the input box and appends to a div. DOM manipulation.
function addDescription() {
    if (document.getElementById("descriptionInput").value == '') {
        return alert("You need to enter text!")
    }
    getParagraph = document.createElement("p")
    getParagraph.className = "relative"
    description = document.getElementById("descriptionInput").value
    getParagraph.append(description)
    appendContainer = document.querySelector("#appendContainer")
    appendContainer.append(getParagraph)
    document.getElementById("descriptionInput").value = "";

    // These lines added for the X close function
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    getParagraph.appendChild(span);
  
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
   }

// Allows User to append input value by pressing "Enter"
function hitEnter() {
    if (event.key === "Enter") {
        addDescription()
    }
   }
   
var i = 0; // initialize counter for typeWriter()
var j = 0; // initialize counter for typeWriter2()
   
// Slowly types a word into the input box before calling addDescription()
function typeWriter() {
var txt = 'Dedicated.';
if (i < txt.length) {
document.getElementById("descriptionInput").value += txt.charAt(i);
i++;
    if (i >= txt.length) {
    addDescription()
    typeWriter2()
    }
setTimeout(typeWriter, 150);
}
}
// Same as typeWriter(). Type word into input box then call addDescription()
function typeWriter2() {
    var txt = "Passionate."
    if (j < txt.length) {
    document.getElementById("descriptionInput").value += txt.charAt(j);
    j++;
        if (j >= txt.length) {
        addDescription()
        }
    setTimeout(typeWriter2, 150);
}
}

// Adds a onclick function to every element with class "close"
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// initiate function
typeWriter()