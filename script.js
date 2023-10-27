document.getElementById('registerButton').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var school = document.getElementById('school').value;
    var eventChoice = document.getElementById('event').value;

    // Store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('school', school);
    localStorage.setItem('event', eventChoice);

    // Redirect to details.html
    window.location.href = 'details.html';
});

