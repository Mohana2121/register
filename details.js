document.addEventListener('DOMContentLoaded', function() {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var school = localStorage.getItem('school');
    var eventChoice = localStorage.getItem('event');

    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('school').textContent = school;
    document.getElementById('event').textContent = eventChoice;
});


