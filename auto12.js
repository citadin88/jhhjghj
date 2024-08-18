// Increase the counter in localStorage when the script runs
if (!localStorage.tabCount) {
    localStorage.tabCount = 0;
}

localStorage.tabCount = parseInt(localStorage.tabCount) + 1;

// Check if there's only one tab
if (parseInt(localStorage.tabCount) === 1) {
    console.log('Only one tab open');
    setTimeout(() => {
        // Perform your action after 3 seconds
        checkPageAndRefresh();
    }, 10000); // Wait for 10 seconds
}

function checkPageAndRefresh() {
    var metaOgUrl = document.querySelector('meta[property="og:url"][content="https://www.ebesucher.com"]');
    var metaOgType = document.querySelector('meta[property="og:type"][content="website"]');
    var metaOgTitle = document.querySelector('meta[property="og:title"][content="Discover Websites | Earn Money | Buy Visitors | eBesucher.com"]');
    var metaOgDescription = document.querySelector('meta[property="og:description"][content="Discover amazing websites and get paid for it - or get free visitors to your website, blog or video!"]');
    
    // Instead of using :contains, search for h2 elements and check their text content
    var h2Element = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('This could also interest you'));
    
    var catshadowClass = document.querySelector('.catshadow.content-page');
    var itemClass = document.querySelector('.item');
    var urlContainsC = window.location.href.includes('/c/');

    // If all conditions are met, refresh the page
    if (metaOgUrl && metaOgType && metaOgTitle && metaOgDescription && h2Element && catshadowClass && itemClass && urlContainsC) {
        setTimeout(() => {
            location.reload();
        }, 3000); // Refresh after 3 seconds
    }
}


// Decrease the counter when the tab is closed or refreshed
window.addEventListener('beforeunload', () => {
    localStorage.tabCount = parseInt(localStorage.tabCount) - 1;
});
