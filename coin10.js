// Function to click on one 'catshadow.adshelper' element and keep scanning for it
function clickCatshadowAdshelperOnce() {
    const elements = document.querySelectorAll('.catshadow.adshelper');
    if (elements.length > 0) {
        elements[0].click();  // Click the first found element
        console.log("Clicked on one 'catshadow adshelper' element.");
    } else {
        console.log("No 'catshadow adshelper' element found yet. Will keep scanning...");
        setTimeout(clickCatshadowAdshelperOnce, 1000);  // Continue scanning every 1 second
    }
}

// Function to monitor and close the tab with the advertisement URL
function monitorAndCloseAdvertisementTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?code=/;
    const currentUrl = window.location.href;

    // Close the tab if it matches the advertisement URL pattern
    if (targetUrlPattern.test(currentUrl)) {
        console.log("Matched the advertisement URL pattern. Closing this tab in 3 seconds...");
        setTimeout(() => {
            console.log("Closing the advertisement tab.");
            window.close();
        }, 3000);
    }
}

// Function to handle the page with /c/ in the URL
function handleCPage() {
    const cPageUrlPattern = /^https:\/\/www\.ebesucher\.com\/c\//;
    const currentUrl = window.location.href;

    if (cPageUrlPattern.test(currentUrl)) {
        console.log("This is the /c/ page. Starting to monitor for 'catshadow.adshelper' elements...");

        // Wait 4 seconds after the page has fully loaded before checking for the element
        setTimeout(() => {
            console.log("Checking for 'catshadow.adshelper' after 4 seconds...");
            clickCatshadowAdshelperOnce();

            // If element is not found, refresh the page once
            setTimeout(() => {
                if (document.querySelectorAll('.catshadow.adshelper').length === 0) {
                    console.log("No 'catshadow adshelper' found. Refreshing the /c/ page...");
                    window.location.reload();
                }
            }, 4000);  // 4 seconds wait before checking and refreshing
        }, 4000);  // 4 seconds wait after full page load

        // Monitor for the advertisement tab and refresh this page if that tab is closed
        const observer = new MutationObserver(() => {
            if (!document.hidden) return;  // Only react if the tab becomes hidden (i.e., a new tab is opened)

            setInterval(() => {
                if (window.closed) {
                    console.log("Advertisement tab closed. Refreshing the /c/ page...");
                    window.location.reload();
                }
            }, 1000);  // Check every second
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
}

// Function to detect and click on coin icons and images when they appear using a MutationObserver
function monitorForIconsAndImages() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if the added element is a coin icon or image
                        const isCoinIcon = node.matches('div[src*="chrome-extension://"], img[src*="chrome-extension://"]') ||
                                           node.matches('img.svg-icon.syTvNi6tKPIccH3zy314dC5FpcbS90PB[width="80"][height="80"]');
                        
                        if (isCoinIcon) {
                            node.click();  // Click the coin icon or image
                            console.log("Clicked on a coin icon or image.");
                        }
                    }
                });
            }
        });
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });
}

// Start monitoring the page
handleCPage();
monitorAndCloseAdvertisementTab();
monitorForIconsAndImages();  // Start monitoring for coin icons and images using MutationObserver
