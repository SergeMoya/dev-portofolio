.navbar {
    position: fixed;
    top: 50px; /* Adjusted based on your header's height */
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(20, 30, 48, 0.95);
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    display: flex; /* Make sure the navbar is always flex, but off-screen when not visible */
    visibility: hidden; /* Use visibility to hide the navbar */
}

.navbar.visible {
    transform: translateY(0);
    visibility: visible; /* Make the navbar visible */
}
