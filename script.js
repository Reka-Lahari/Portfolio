// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
  // Contact form validation
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const address = document.querySelector('input[placeholder="Your Address"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
  
    if (!name || !email || !address || !phone || !message) {
      alert('All fields are required!');
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    alert('Your message has been sent successfully!');
    this.reset(); // Reset form fields
  });
  
  // Skill bar animations
  window.addEventListener('scroll', function () {
    const skillBars = document.querySelectorAll('.skill-bar span');
    const skillSection = document.querySelector('.skills');
  
    if (window.scrollY + window.innerHeight > skillSection.offsetTop + 100) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('class') + '%';
      });
    }
  });
