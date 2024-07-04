element.addEventListener('mouseenter', (event) => {
    try {
        handleMouseEnter();
    } catch (error) {
        console.error('Error handling mouse enter:', error.message);
    }
});

element.addEventListener('mouseleave', (event) => {
    try {
        handleMouseLeave();
    } catch (error) {
        console.error('Error handling mouse leave:', error.message);
    }
});
