document.addEventListener("DOMContentLoaded", function() {
    // Function to automatically update the full view links to match the image source
    function updateFullViewLinks() {
        // Get all elements with the class 'slide'
        const slides = document.querySelectorAll('.slide');

        slides.forEach(slide => {
            // Find the image and the anchor tag within each slide
            const img = slide.querySelector('img');
            const link = slide.querySelector('a.view-full-btn');

            if (img && link) {
                // Get the image source
                const imgSrc = img.getAttribute('src');
                
                // Update the href and onclick to use the same image source
                link.setAttribute('href', imgSrc);
                link.setAttribute('onclick', `openFullImage('${imgSrc}'); return false;`);
            }
        });
    }

    // Function to open the full image in a new window (or implement as needed)
    window.openFullImage = function(imageUrl) {
        window.open(imageUrl, '_blank');
    };

    // Call the function to update the links when the page loads
    updateFullViewLinks();
});
