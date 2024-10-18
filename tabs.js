function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNestedTab(evt, nestedTabName) {
    var i, nestedTabContent, nestedTabLinks;

    // Hide all nested tab content
    nestedTabContent = document.getElementsByClassName("nested-tabcontent");
    for (i = 0; i < nestedTabContent.length; i++) {
        nestedTabContent[i].style.display = "none";
    }

    // Remove the active class from all nested tab links
    nestedTabLinks = document.getElementsByClassName("nested-tablink");
    for (i = 0; i < nestedTabLinks.length; i++) {
        nestedTabLinks[i].className = nestedTabLinks[i].className.replace(" active", "");
    }

    // Show the current nested tab and add an active class
    document.getElementById(nestedTabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function moveSlide(n, sliderId) {
    let slider = document.querySelector(`#${sliderId} .slider`);
    let slides = document.querySelectorAll(`#${sliderId} .slide`);
    let currentTransform = slider.style.transform;
    let currentIndex = Math.abs(currentTransform.replace("translateX(", "").replace("%)", "")) / 100 || 0;

    let newIndex = currentIndex + n;
    if (newIndex < 0) {
        newIndex = slides.length - 1; // Wrap around to the last slide
    } else if (newIndex >= slides.length) {
        newIndex = 0; // Wrap around to the first slide
    }

    slider.style.transform = `translateX(${-newIndex * 100}%)`;
}
