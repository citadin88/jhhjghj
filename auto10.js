// Function to start the initial 10-second timer
function startTimer() {
    setTimeout(() => {
        checkTabs();
    }, 10000); // 10 seconds
}

// Function to check the number of tabs open and monitor continuously
function checkTabs() {
    chrome.tabs.query({}, (tabs) => {
        if (tabs.length === 1) {
            // If only one tab is open, wait 3 seconds and then check the page
            setTimeout(() => {
                refreshTabIfConditionMet(tabs[0].id);
            }, 3000); // 3 seconds
        }
    });

    // Continue monitoring tabs every 2 seconds
    setTimeout(checkTabs, 2000); // Adjust the interval as needed
}

// Function to refresh the tab if the conditions are met
function refreshTabIfConditionMet(tabId) {
    chrome.tabs.executeScript(tabId, {
        code: `
        // Check for the specific meta tags and other conditions
        var metaOgUrl = document.querySelector('meta[property="og:url"][content="https://www.ebesucher.com"]');
        var metaOgType = document.querySelector('meta[property="og:type"][content="website"]');
        var metaOgTitle = document.querySelector('meta[property="og:title"][content="Discover Websites | Earn Money | Buy Visitors | eBesucher.com"]');
        var metaOgDescription = document.querySelector('meta[property="og:description"][content="Discover amazing websites and get paid for it - or get free visitors to your website, blog or video!"]');
        var h2Element = document.querySelector('h2:contains("This could also interest you")');
        var catshadowClass = document.querySelector('.catshadow.content-page');
        var itemClass = document.querySelector('.item');
        var urlContainsC = window.location.href.includes('/c/');

        // If all conditions are met, refresh the page
        if (metaOgUrl && metaOgType && metaOgTitle && metaOgDescription && h2Element && catshadowClass && itemClass && urlContainsC) {
            setTimeout(() => {
                location.reload();
            }, 3000); // Refresh after 3 seconds
        }
        `
    });
}

// Start continuous monitoring for the number of open tabs
checkTabs();
