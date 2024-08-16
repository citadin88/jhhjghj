// Example of simulating a trusted click event

// Ensure that the UserActivation API is available
if (window.UserActivation) {
    // Activate user interaction on the page
    window.UserActivation.activate();

    // Create a trusted click event
    const trustedClickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
        isTrusted: true, // This flag makes the event trusted
    });

    // Find the element you want to click
    const elementToClick = document.querySelector('your-selector-here');

    // Dispatch the event to simulate a click
    if (elementToClick) {
        elementToClick.dispatchEvent(trustedClickEvent);
    } else {
        console.error('Element not found');
    }
} else {
    console.error('UserActivation API is not supported in this browser');
}
