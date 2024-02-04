document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the button
    const goToNextPageBtn = document.getElementById('goToNextPage');

    // Event listener for button click
    goToNextPageBtn.addEventListener('click', function () {
        // Navigate to the next page
        window.location.href = 'gdsc.html';
    });
});
