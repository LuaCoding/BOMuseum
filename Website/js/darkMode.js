function darkToggle() {
    var moonsun = document.getElementById('moon');
    var element = document.body;
    element.classList.toggle("dark");
    element.classList.toggle("light");
    if (element.classList.contains("light")) {
        moonsun.textContent = "☀️";
    }
    else{
        moonsun.textContent = "🌙";
    }
 }