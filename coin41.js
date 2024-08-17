// Function to monitor the new tab for the presence of specific elements and close it when conditions are met
function monitorAndCloseOnElements() {
    const checkInterval = setInterval(() => {
        const hasClassLKVoSpgc4d = document.querySelector('.LKVoSpgc4d-ca.LKVoSpgc4d-top');
        const hasClassCheckCircle = document.querySelector('.fa.fa-check-circle-o');
        const hasIdAoPoints = document.getElementById('ao-points');

        // Check if all three elements are present (Green box with 16 and check mark)
        if (hasClassLKVoSpgc4d && hasClassCheckCircle && hasIdAoPoints) {
            console.log("All three required elements found: closing the tab.");

            // Wait for 7 seconds and then close the tab
            setTimeout(() => {
                window.close();  // Close the new tab
            }, 7000);

            clearInterval(checkInterval);  // Stop checking once the tab is being closed
        } else {
            console.log("Still searching for the required elements...");
        }
    }, 1000);  // Check every second
}

// Function to click on the first available '.catshadow.adshelper' element
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        const elementToClick = elements[0];  // Select the first element found
        elementToClick.click();  // Click the element
        console.log("Clicked on an element with class 'catshadow adshelper'");

        // Monitor the new tab for the specific elements
        monitorAndCloseOnElements();
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to monitor the document for the '.catshadow.adshelper' class and click on the first occurrence
function monitorForCatshadowAdshelper() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const catshadowElements = document.querySelectorAll('.catshadow.adshelper');
                    if (catshadowElements.length > 0) {
                        clickCatshadowAdshelper();
                    }
                }
            });
        });
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });
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
monitorForCatshadowAdshelper();  // Start monitoring for '.catshadow.adshelper'
monitorAndCloseTab();  // Monitor for specific URL and conditions to close the tab
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
