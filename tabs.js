// JavaScript to manage tabs and sub-tabs

function openDataset(evt, datasetName) {
    var i, tabcontent, tablinks;

    // Hide all tab content by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and set active class
    document.getElementById(datasetName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openMethod(evt, methodName) {
    var i, methodcontent, subtablinks;

    // Hide all method content by default
    methodcontent = document.getElementsByClassName("method-content");
    for (i = 0; i < methodcontent.length; i++) {
        methodcontent[i].style.display = "none";
    }

    // Remove active class from all sub-tab links
    subtablinks = document.getElementsByClassName("sub-tablink");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }

    // Show the current method and set active class
    document.getElementById(methodName).style.display = "block";
    evt.currentTarget.className += " active";
}
