// Function to remove divs with class 'overflow-wrapper'
function removeOverflowWrapper() {
    console.log('Removing overflow-wrapper elements');
    document.querySelectorAll('div.overflow-wrapper').forEach(element => {
        element.remove();
    });
}

// Initial call in case the element is already loaded
removeOverflowWrapper();

// Set up a MutationObserver to watch for new elements being added to the DOM
const observer = new MutationObserver(() => {
    removeOverflowWrapper();
});

// Observe the document body for added or modified child elements
observer.observe(document.body, { childList: true, subtree: true });
