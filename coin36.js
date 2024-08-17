// Function to search and click on elements with the specified class
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements.forEach((element) => {
            element.click();  // Click the element
            console.log("Clicked on an element with class 'catshadow adshelper'");
        });
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to monitor the page for a specific URL and elements, and close the page if conditions are met
function monitorAndCloseTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?surfForUser=protecteur6&code=/;
    
    // Timer to check for specific conditions on the page
    const checkConditions = setInterval(() => {
        const currentUrl = window.location.href;

        // Check if the current URL matches the target pattern
        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");

            // Wait for 3 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 3 seconds. Closing the page.");
                window.close();  // Close the current tab
            }, 3000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Waiting for the URL to match the target pattern...");
        }

        // Check for the presence of specific elements that indicate non-redirect pages
        const aoPointsElement = document.querySelector('#ao-points');
        const checkCircleIcon = document.querySelector('.fa.fa-check-circle-o');
        const customClassElement = document.querySelector('.LKVoSpgc4d-ca.LKVoSpgc4d-top');

        if (aoPointsElement || checkCircleIcon || customClassElement) {
            console.log("Detected specific elements on the page.");

           
            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Specific elements not found yet...");
        }
    }, 1000);  // Check every second
}

// Function to detect and click on coin icons, high z-index elements, and specific img elements using a MutationObserver
function monitorForPopupsAndIcons() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if the element has a high z-index and contains the class 'svg-icon'
                    const hasHighZIndex = window.getComputedStyle(node).zIndex === '2147483647';
                    const hasSvgIconClass = node.classList.contains('svg-icon');
                    
                    // Check if the added element is an img with specific attributes
                    const isSpecificImg = node.tagName === 'IMG' &&
                        node.classList.contains('svg-icon') &&
                        node.getAttribute('width') === '80' &&
                        node.getAttribute('height') === '80';
                    
                    // Log detected elements for debugging
                    if (hasHighZIndex || hasSvgIconClass || isSpecificImg) {
                        console.log('Detected element:', node);
                    }

                    if (hasHighZIndex || hasSvgIconClass || isSpecificImg) {
                        node.click();  // Click the element
                        console.log("Clicked on an element with high z-index, 'svg-icon' class, or specific img attributes.");
                    }
                }
            });
        });
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });
}

// Function to periodically check for images with specific attributes and click on them
function periodicallyClickSpecificImages() {
    setInterval(() => {
        const images = document.querySelectorAll('img.svg-icon[width="80"][height="80"]');
        images.forEach((img) => {
            img.click();  // Click the image
            console.log("Clicked on an img with class 'svg-icon' and width/height 80.");
        });
    }, 500);  // Check every 500ms
}

// Execute the functions
clickCatshadowAdshelper();
monitorAndCloseTab();
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
