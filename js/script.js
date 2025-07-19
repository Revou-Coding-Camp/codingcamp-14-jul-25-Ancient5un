// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Update Current Time
function updateCurrentTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toString();
}

// Update time every second
setInterval(updateCurrentTime, 1000);
updateCurrentTime(); // Initial call

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('msg').value.trim();
    
    // Validasi
    if(!name || !birthdate || !gender || !message) {
        alert('Please fill all fields!');
        return;
    }
    
    // Format tanggal
    const formattedDate = new Date(birthdate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Tampilkan hasil
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultBirthdate').textContent = formattedDate;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultMessage').textContent = message;
    
    // Tampilkan result container
    document.getElementById('result').style.display = 'block';
    
    // Update welcome message
    document.getElementById('username').textContent = name;
    
    // Scroll ke hasil
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    
    // Reset form
    this.reset();
});