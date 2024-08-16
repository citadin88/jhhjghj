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

// Function to detect and click on coin icons when they appear
function clickOnCoinIcons() {
    const checkForCoins = setInterval(() => {
        const coinIcons = document.querySelectorAll('div[src*="chrome-extension://"][taskpoints]');  // Detect divs with attributes similar to the provided example

        if (coinIcons.length > 0) {
            coinIcons.forEach((coin) => {
                coin.click();  // Click the coin icon
                console.log("Clicked on a coin icon.");
            });
        } else {
            console.log("No coin icons found.");
        }
    }, 100);  // Check every 100ms for quick response
}

// Execute the functions
clickCatshadowAdshelper();
monitorAndCloseTab();
clickOnCoinIcons();  // Start scanning for coin icons
