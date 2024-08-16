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

// Function to detect the URL and wait for the timer
function monitorRedirectAndCloseTab() {
    const targetUrlPattern = /^https:\/\/www\.ebesucher\.com\/advertisement\/view\?surfForUser=protecteur6&code=/;
    const timerSelector = '#timer';  // Replace with the correct selector for the timer element

    const checkUrlAndTimer = setInterval(() => {
        const currentUrl = window.location.href;
        if (targetUrlPattern.test(currentUrl)) {
            console.log("Matched the target URL pattern.");

            // Wait for 3 seconds before closing the page
            setTimeout(() => {
                console.log("Timer reached 3 seconds. Closing the page.");
                window.close();  // Close the current tab
            }, 3000);

            clearInterval(checkUrlAndTimer);
        } else {
            console.log("Waiting for the URL to match the target pattern...");
        }
    }, 1000);
}

// Execute the functions
clickCatshadowAdshelper();

// Assuming the script is injected into the opened page as well
monitorRedirectAndCloseTab();
