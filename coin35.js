// Function to search and click on the first .catshadow.adshelper element
function clickCatshadowAdshelper() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements[0].click();  // Click only the first element
        console.log("Clicked on an element with class 'catshadow adshelper'");
    } else {
        console.log("No elements with class 'catshadow adshelper' found.");
    }
}

// Function to constantly search for '.catshadow.adshelper'
function constantlySearchForCatshadowAdshelper() {
    // Use MutationObserver to monitor DOM changes and check for '.catshadow.adshelper'
    const observer = new MutationObserver((mutations) => {
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
    let adPageOpened = false;

    // Timer to check for specific conditions on the page
    const checkConditions = setInterval(() => {
        const currentUrl = window.location.href;

        // Check if the current URL matches the target pattern
        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");
            adPageOpened = true;

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
            adPageOpened = true;

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

    // Refresh main page if ad page is closed
    setInterval(() => {
        if (adPageOpened) {
            const currentUrl = window.location.href;
            const mainPageUrls = [
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
            if (mainPageUrls.includes(currentUrl)) {
                console.log("Main page URL detected. Refreshing.");
                location.reload();  // Reload the page
            }
        }
    }, 1000);  // Check every second
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
        if (elements.length === 0) {
            console.log(".catshadow.adshelper not found, refreshing the page.");
            location.reload();  // Reload the page
        }
    }, 4000);  // Check every 4 seconds
}

// Execute the functions
constantlySearchForCatshadowAdshelper();
monitorAndCloseTab();
periodicallyClickSpecificImages();
refreshIfNoCatshadowAdshelper();
