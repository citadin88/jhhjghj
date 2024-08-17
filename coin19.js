// Function to constantly search for .catshadow.adshelper and click on one when found
function constantlySearchAndClickCatshadow() {
    const searchInterval = setInterval(() => {
        const elements = document.querySelectorAll('.catshadow.adshelper');
        if (elements.length > 0) {
            elements[0].click();  // Click only the first element
            console.log("Clicked on one element with class 'catshadow adshelper'");
            clearInterval(searchInterval);  // Stop searching after clicking one
        } else {
            console.log("No elements with class 'catshadow adshelper' found. Continuing to search...");
        }
    }, 1000);  // Check every second
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

                // After the ad tab closes, refresh the main tab with /c/ URLs after 2 seconds
                setTimeout(() => {
                    refreshCPageIfNeeded();
                }, 2000);

            }, 3000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Waiting for the URL to match the target pattern...");
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

// Function to refresh the /c/ page if it's in the specified list after the ad page closes
function refreshCPageIfNeeded() {
    const currentUrl = window.location.href;
    const allowedUrls = [
        "https://www.ebesucher.com/c/home-garden?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/computers-accessories?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/earn-money-mlm?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/jobs-business?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/fun-entertainment?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/health-wellness?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/car-motorcycle?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/telecommunication-mobile?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/family-relationship?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/auctions?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/games-clans?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/shopping-e-commerce?surfForUser=protecteur6",
        "https://www.ebesucher.com/c/magazines-books?surfForUser=protecteur6"
    ];

    if (allowedUrls.includes(currentUrl)) {
        console.log("Refreshing the /c/ page...");
        setTimeout(() => {
            window.location.reload();
        }, 2000);  // Reload the page after 2 seconds

        // Check for .catshadow.adshelper after reload
        setTimeout(() => {
            const catshadowElement = document.querySelector('.catshadow.adshelper');
            if (!catshadowElement) {
                console.log(".catshadow.adshelper not found, refreshing the page.");
                window.location.reload();
            } else {
                console.log(".catshadow.adshelper found, no refresh needed.");
            }
        }, 4000);  // Wait for 4 seconds before checking
    }
}

// Execute the functions
constantlySearchAndClickCatshadow();  // Constantly search for .catshadow.adshelper
monitorAndCloseTab();
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
