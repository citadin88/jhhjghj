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

            // Wait for 10 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 10 seconds. Closing the page.");
                window.close();  // Close the current tab
            }, 10000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Specific elements not found yet...");
        }
    }, 1000);  // Check every second
}

// Function to detect and click on coin icons and high z-index elements when they appear using a MutationObserver
function monitorForCoinIconsAndHighZIndexElements() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if the added element is similar to a coin icon
                        const isCoinIcon = node.matches('div[src*="chrome-extension://"], img[src*="chrome-extension://"]');
                        
                        // Check if the element has a high z-index and contains the class 'svg-icon'
                        const isHighZIndexSvgIcon = node.style.zIndex === '2147483647' && node.classList.contains('svg-icon');
                        
                        const isSvgIconClass = node.classList.contains('svg-icon');
                        
                        if (isCoinIcon || isHighZIndexSvgIcon || isSvgIconClass) {
                            node.click();  // Click the element
                            console.log("Clicked on an element with criteria: Coin Icon, High Z-Index, or SVG Icon class.");
                        }
                    }
                });
            }
        });
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });
}

// Execute the functions
clickCatshadowAdshelper();
monitorAndCloseTab();
monitorForCoinIconsAndHighZIndexElements();  // Start monitoring for coin icons and high z-index elements using MutationObserver
