// Set to keep track of clicked elements
const clickedElements = new Set();

// Function to search and click on one unclicked element with the specified class
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    for (const element of elements) {
        // Generate a unique identifier for the element
        const elementId = element.getAttribute('id') || element.innerHTML;

        // If the element has not been clicked before, click it
        if (!clickedElements.has(elementId)) {
            element.click();  // Click the element
            clickedElements.add(elementId);  // Mark it as clicked
            console.log("Clicked on an element with class 'catshadow adshelper'");
            break;  // Only click one element
        }
    }
}

// Function to constantly search for '.catshadow.adshelper'
function constantlySearchForCatshadowAdshelper() {
    // Use MutationObserver to monitor DOM changes and check for '.catshadow.adshelper'
    const observer = new MutationObserver(() => {
        clickCatshadowAdshelper();
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Use setInterval to constantly search for '.catshadow.adshelper'
    setInterval(() => {
        clickCatshadowAdshelper();
    }, 1000);  // Check every 1 second
}

// Function to monitor the page for specific elements and close the page if all are found
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

        if (aoPointsElement && checkCircleIcon && customClassElement) {
            console.log("All specific elements detected on the page.");

            // Wait for 10 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 10 seconds. Closing the page.");
                window.close();  // Close the current tab
            }, 10000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Not all specific elements found yet...");
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

// Function to monitor and refresh if .catshadow.adshelper is not found
function refreshIfNoCatshadowAdshelper() {
    setInterval(() => {
        const elements = document.querySelectorAll('.catshadow.adshelper');
        const currentUrl = window.location.href;

        // Check if the URL is one of the specified patterns before refreshing
        const urlsToExclude = [
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

        // Only refresh if the current URL is not in the list of excluded URLs
        if (elements.length === 0 && !urlsToExclude.includes(currentUrl)) {
            console.log(".catshadow.adshelper not found, refreshing the page.");
            location.reload();  // Reload the page
        }
    }, 4000);  // Check every 4 seconds
}

// Execute the functions
constantlySearchForCatshadowAdshelper();
monitorAndCloseTab();
refreshIfNoCatshadowAdshelper();
