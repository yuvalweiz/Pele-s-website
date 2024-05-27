document.addEventListener("DOMContentLoaded", function() {
    // Initialize like count from local storage or default to 0
    let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;

    // Get references to the like button and count display
    const likeButton = document.getElementById('like-button');
    const likeCountDisplay = document.getElementById('like-count');

    // Function to update the like count
    function updateLikeCount() {
        likeCountDisplay.textContent = likeCount;
        localStorage.setItem('likeCount', likeCount);
    }

    // Add event listener to the like button
    likeButton.addEventListener('click', function() {
        likeCount++;
        updateLikeCount();
    });

    // Initial update to display the initial like count
    updateLikeCount();
});
