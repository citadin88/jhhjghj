// Function to search and click on elements with the specified class
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements[0].click();  // Click the first found element
        console.log("Clicked on the first element with class 'catshadow adshelper'");
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to monitor the page for a specific URL and elements, and close the new tab if conditions are met
function monitorAndCloseNewTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?surfForUser=protecteur6&code=/;

    // Timer to check for specific conditions on the page
    const checkConditions = setInterval(() => {
        const currentUrl = window.location.href;

        // Check if the current URL matches the target pattern
        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");

            // Wait for 3 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 3 seconds. Closing the new tab.");
                window.close();  // Close the new tab
            }, 3000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Waiting for the URL to match the target pattern...");
        }

        // Check for the presence of specific elements that indicate non-redirect pages
const aoPointsElement = document.querySelector('#ao-points');
const checkCircleIcon = document.querySelector('.fa.fa-check-circle-o');
const customClassElement = document.querySelector('.LKVoSpgc4d-ca.LKVoSpgc4d-top');

// Only proceed if all three elements are present
if (aoPointsElement && checkCircleIcon && customClassElement) {
    console.log("All required elements detected on the new tab.");

    // Wait for 10 seconds before closing the page
    setTimeout(() => {
        console.log("Timer reached 10 seconds. Closing the new tab.");
        window.close();  // Close the new tab
    }, 10000);
} else {
    console.log("Not all required elements found yet...");
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

// Modified to ensure the page only reloads after certain conditions are met
function reloadAfterTabClose() {
    // Listen for tab close event
    window.addEventListener('beforeunload', (event) => {
        const urlsToMatch = [
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

        setTimeout(() => {
            if (urlsToMatch.includes(window.location.href)) {
                location.reload();  // Reload the page
            }
        }, 2000);
    });
}

// Execute the functions
clickCatshadowAdshelper();
setInterval(clickCatshadowAdshelper, 1000);  // Monitor for .catshadow.adshelper every second
monitorAndCloseNewTab();  // Monitor the new tab and close it if conditions are met
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
reloadAfterTabClose();  // Reload the parent tab after the ad tab closes
