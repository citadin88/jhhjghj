// Function to search and click on elements with the specified class
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements[0].click();  // Click only the first element
        console.log("Clicked on an element with class 'catshadow adshelper'");
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to monitor the page for a specific URL and elements, and close the page if conditions are met
function monitorAndCloseTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?surfForUser=protecteur6&code=/;
    
    const checkConditions = setInterval(() => {
        const currentUrl = window.location.href;

        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");
            setTimeout(() => {
                console.log("Timer reached 3 seconds. Closing the page.");
                window.close();  // Close the current tab
            }, 3000);

            clearInterval(checkConditions);  // Stop the interval
        } else {
            console.log("Waiting for the URL to match the target pattern...");
        }

        const aoPointsElement = document.querySelector('#ao-points');
        const checkCircleIcon = document.querySelector('.fa.fa-check-circle-o');
        const customClassElement = document.querySelector('.LKVoSpgc4d-ca.LKVoSpgc4d-top');

        if (aoPointsElement || checkCircleIcon || customClassElement) {
            console.log("Detected specific elements on the page.");

            setTimeout(() => {
                console.log("Timer reached 10 seconds. Closing the page.");
                window.close();  // Close the current tab with specific elements
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
                    const hasHighZIndex = window.getComputedStyle(node).zIndex === '2147483647';
                    const hasSvgIconClass = node.classList.contains('svg-icon');
                    
                    const isSpecificImg = node.tagName === 'IMG' &&
                        node.classList.contains('svg-icon') &&
                        node.getAttribute('width') === '80' &&
                        node.getAttribute('height') === '80';
                    
                    if (hasHighZIndex || hasSvgIconClass || isSpecificImg) {
                        node.click();
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
            img.click();
            console.log("Clicked on an img with class 'svg-icon' and width/height 80.");
        });
    }, 500);  // Check every 500ms
}

// Function to refresh the main tab after the advertisement tab is handled
function refreshMainTabAfterAd() {
    setTimeout(() => {
        console.log("Checking to refresh main tab...");
        
        const mainTabUrlPatterns = [
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

        const currentUrl = window.location.href;
        
        if (mainTabUrlPatterns.some(pattern => currentUrl.includes(pattern))) {
            setTimeout(() => {
                console.log("Refreshing the main tab...");
                location.reload();  // Reload the main tab
            }, 4000);  // Wait for 2 seconds before reloading
        } else {
            console.log("Current tab URL does not match any main tab patterns.");
        }
    }, 4000);  // Wait for 2 seconds after the ad tab is closed
}

// Execute the functions
clickCatshadowAdshelper();
monitorAndCloseTab();
monitorForPopupsAndIcons();  // Start monitoring for various elements using MutationObserver
periodicallyClickSpecificImages();  // Periodically click specific images
refreshMainTabAfterAd();  // Refresh main tab after handling the ad tab
