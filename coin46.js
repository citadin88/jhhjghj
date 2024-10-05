// Function to search and click on elements with the specified class
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements[0].click();  // Click the first element found
        console.log("Clicked on an element with class 'catshadow adshelper'");
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to monitor and close the correct tab
function monitorAndCloseTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?surfForUser=protecteur6&code=/;
    const excludeUrlPattern = /\/c\//;  // Pattern to exclude URLs containing '/c/'

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

        // Check for specific elements that indicate non-redirect pages
        const aoPointsElement = document.querySelector('#ao-points');
        const checkCircleIcon = document.querySelector('.fa.fa-check-circle-o');
        const customClassElement = document.querySelector('.LKVoSpgc4d-ca.LKVoSpgc4d-top');

        if (aoPointsElement || checkCircleIcon || customClassElement) {
            console.log("Detected specific elements on the page.");

            // Wait for 10 seconds before closing the page
            setTimeout(() => {
                // Prevent closing tabs with '/c/' in the URL
                if (!excludeUrlPattern.test(currentUrl)) {
                    console.log("Timer reached 10 seconds. Closing the page.");
                    window.close();  // Close the current tab
                } else {
                    console.log("URL contains '/c/'. Not closing the tab.");
                }
            }, 30000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Specific elements not found yet...");
        }
    }, 1000);  // Check every second
}

// Function to monitor and close the correct tab if necessary
function monitorAndReload() {
    const reloadableUrls = [
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
        const currentUrl = window.location.href;

        if (reloadableUrls.some(url => currentUrl.startsWith(url))) {
            console.log("Reloading the tab with URL: " + currentUrl);
            window.location.reload();  // Reload the tab
        }
    }, 2000);
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
setInterval(clickCatshadowAdshelper, 1000);  // Constantly search for .catshadow.adshelper every second
monitorAndCloseTab();
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
