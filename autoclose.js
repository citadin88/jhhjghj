(function monitorTabs() {
    const monitoredTabs = {}; // Tracks tab URLs and their timestamps
    const CLOSE_TIME_MS = 10 * 1000; // 10 seconds in milliseconds

    // Function to check and close tabs
    function checkAndCloseTabs() {
        const currentTab = window.location.href;

        // Skip tabs with the specified pattern
        if (currentTab.includes("https://ebesucher.de/c/")) {
            console.log(`Ebesucher tab detected, skipping: ${currentTab}`);
            return;
        }

        // Start tracking the tab if not already monitored
        if (!monitoredTabs[currentTab]) {
            monitoredTabs[currentTab] = Date.now();
            console.log(`Started monitoring tab: ${currentTab}`);
        }

        // Calculate elapsed time
        const elapsedTime = Date.now() - monitoredTabs[currentTab];
        console.log(`Tab: ${currentTab} | Elapsed Time: ${elapsedTime / 1000}s`);

        // Close tab if it exceeds the allowed time
        if (elapsedTime > CLOSE_TIME_MS) {
            console.log(`Closing tab after 10 seconds: ${currentTab}`);
            window.close();
        }
    }

    // Run the function every 10 seconds to check tabs
    setInterval(checkAndCloseTabs, 10 * 1000);
})();