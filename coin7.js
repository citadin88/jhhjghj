// Function to search and click on a single element with the specified class after a delay
function delayedClickCatshadowAdshelper() {
    setTimeout(() => {
        const elements = document.querySelectorAll('.catshadow.adshelper');
        if (elements.length > 0) {
            elements[0].click();  // Click the first element
            console.log("Clicked on one element with class 'catshadow adshelper'");
        } else {
            console.log("No elements with class 'catshadow adshelper' found. Refreshing the page...");
            // If no catshadow.adshelper is found, refresh the page
            if (window.location.href.startsWith('https://www.ebesucher.com/c/')) {
                window.location.reload();  // Refresh the current tab
            }
        }
    }, 4000);  // Wait for 4 seconds after the page has fully loaded
}

// Function to monitor for catshadow.adshelper elements constantly after page load
function monitorCatshadowAdshelper() {
    window.addEventListener('load', () => {
        delayedClickCatshadowAdshelper();  // Delay the click action by 4 seconds
        setInterval(() => {
            delayedClickCatshadowAdshelper();  // Keep checking every 500ms after the initial delay
        }, 500);
    });
}

// Function to monitor the new tab for a specific URL and close it if conditions are met
function monitorAndCloseTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?code=/;

    // Timer to check for specific conditions on the page
    const checkConditions = setInterval(() => {
        const currentUrl = window.location.href;

        // Check if the current URL matches the target pattern (advertisement/view?code)
        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");

            // Wait for 3 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 3 seconds. Closing the page.");
                window.close();  // Close the current tab

                // After closing the tab, refresh the main tab if it's the /c/ page, after a 4-second delay
                setTimeout(() => {
                    if (window.opener && window.opener.location.href.startsWith('https://www.ebesucher.com/c/')) {
                        window.opener.location.reload();  // Refresh the main page
                    }
                }, 4000);
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

            // Wait for 10 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 10 seconds. Closing the page.");
                window.close();  // Close the current tab

                // After closing the tab, refresh the main tab if it's the /c/ page, after a 4-second delay
                setTimeout(() => {
                    if (window.opener && window.opener.location.href.startsWith('https://www.ebesucher.com/c/')) {
                        window.opener.location.reload();  // Refresh the main page
                    }
                }, 2000);
            }, 10000);

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
monitorCatshadowAdshelper();  // Constantly monitor and click on one catshadow.adshelper with delay
monitorAndCloseTab();  // Monitor and close the tab when appropriate
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
