
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactForm');

//   const firstName = document.getElementById('firstName');
//   const lastName = document.getElementById('lastName');
//   const emailField = document.getElementById('email');
//   const numberField = document.getElementById('number');
//   const messageField = document.getElementById('message');

//   const firstNameError = document.getElementById('firstNameError');
//   const lastNameError = document.getElementById('lastNameError');
//   const emailError = document.getElementById('emailError');
//   const numberError = document.getElementById('numberError');
//   const messageError = document.getElementById('messageError');
//   const formMsg = document.getElementById('formMsg');

//   // Utility regexes
//   const nameAllowed = /^[A-Za-z\s]+$/;           // letters and spaces only
//   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; // lowercase-only email
//   const phoneRegex = /^[0-9]{9,10}$/;             // 9 or 10 digits

//   // sanitize name inputs as user types (remove digits/special chars)
//   function sanitizeNameInput(el, errEl) {
//     el.addEventListener('input', () => {
//       const raw = el.value;
//       const sanitized = raw.replace(/[^A-Za-z\s]/g, ''); // remove everything except letters & spaces
//       if (raw !== sanitized) {
//         errEl.textContent = 'Only letters and spaces allowed';
//         el.style.border = '1px solid red';
//       } else {
//         errEl.textContent = '';
//         el.style.border = '1px solid #ccc';
//       }
//       if (el.value !== sanitized) el.value = sanitized;
//     });
//   }

//   sanitizeNameInput(firstName, firstNameError);
//   sanitizeNameInput(lastName, lastNameError);

//   // Email input - only lowercase & basic allowed chars
//   emailField.addEventListener('input', () => {
//     const value = emailField.value;
//     if (/[A-Z]/.test(value)) {
//       emailError.textContent = 'Only lowercase letters allowed in email';
//       emailField.style.border = '1px solid red';
//     } else if (!/^[a-z0-9@._+-]*$/.test(value)) {
//       emailError.textContent = 'Invalid character in email';
//       emailField.style.border = '1px solid red';
//     } else {
//       emailError.textContent = '';
//       emailField.style.border = '1px solid #ccc';
//     }
//   });

//   // Number input - digits only while typing
//   numberField.addEventListener('input', () => {
//     const value = numberField.value;
//     if (/[^0-9]/.test(value)) {
//       numberError.textContent = 'Only numbers allowed';
//       numberField.style.border = '1px solid red';
//     } else {
//       numberError.textContent = '';
//       numberField.style.border = '1px solid #ccc';
//     }
//   });

//   // Submit handler
//   form.addEventListener('submit', (e) => {
//     formMsg.textContent = '';
//     let valid = true;

//     const fNameVal = firstName.value.trim();
//     const lNameVal = lastName.value.trim();
//     const emailVal = emailField.value.trim();
//     const phoneVal = numberField.value.trim();
//     const msgVal = messageField.value.trim();

//     // Validate first name
//     if (!fNameVal) {
//       firstNameError.textContent = 'First name is required';
//       firstName.style.border = '1px solid red';
//       valid = false;
//     } else if (!nameAllowed.test(fNameVal)) {
//       firstNameError.textContent = 'Only letters and spaces allowed';
//       firstName.style.border = '1px solid red';
//       valid = false;
//     } else {
//       firstNameError.textContent = '';
//       firstName.style.border = '1px solid #ccc';
//     }

//     // Validate last name
//     if (!lNameVal) {
//       lastNameError.textContent = 'Last name is required';
//       lastName.style.border = '1px solid red';
//       valid = false;
//     } else if (!nameAllowed.test(lNameVal)) {
//       lastNameError.textContent = 'Only letters and spaces allowed';
//       lastName.style.border = '1px solid red';
//       valid = false;
//     } else {
//       lastNameError.textContent = '';
//       lastName.style.border = '1px solid #ccc';
//     }

//     // Validate email
//     if (!emailVal) {
//       emailError.textContent = 'Email is required';
//       emailField.style.border = '1px solid red';
//       valid = false;
//     } else if (/[A-Z]/.test(emailVal) || !emailRegex.test(emailVal)) {
//       emailError.textContent = 'Enter a valid lowercase email';
//       emailField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       emailError.textContent = '';
//       emailField.style.border = '1px solid #ccc';
//     }

//     // Validate phone (9 or 10 digits)
//     if (!phoneRegex.test(phoneVal)) {
//       numberError.textContent = 'Enter valid 9 or 10-digit number';
//       numberField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       numberError.textContent = '';
//       numberField.style.border = '1px solid #ccc';
//     }

//     // Validate message
//     if (!msgVal) {
//       messageError.textContent = 'Message required';
//       messageField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       messageError.textContent = '';
//       messageField.style.border = '1px solid #ccc';
//     }

//     // If invalid, prevent submission; if valid, allow normal submit to Formspree
//     if (!valid) {
//       e.preventDefault();
//       // helpful debug in console
//       console.log('Form validation failed — preventing submit.');
//     } else {
//       // Let the browser submit the form normally to Formspree
//       // Optionally show a small message while it submits:
//       formMsg.style.color = 'green';
//       formMsg.textContent = 'Submitting…';
//       // Do NOT call e.preventDefault() here
//     }
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactForm');

//   const firstName = document.getElementById('firstName');
//   const lastName = document.getElementById('lastName');
//   const emailField = document.getElementById('email');
//   const numberField = document.getElementById('number');
//   const messageField = document.getElementById('message');

//   const firstNameError = document.getElementById('firstNameError');
//   const lastNameError = document.getElementById('lastNameError');
//   const emailError = document.getElementById('emailError');
//   const numberError = document.getElementById('numberError');
//   const messageError = document.getElementById('messageError');
//   const formMsg = document.getElementById('formMsg');

//   // Utility regexes
//   const nameAllowed = /^[A-Za-z\s]+$/;           // letters and spaces only
//   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; // lowercase-only email
//   const phoneRegex = /^[0-9]{9,10}$/;             // 9 or 10 digits

//   // sanitize name inputs as user types (remove digits/special chars)
//   function sanitizeNameInput(el, errEl) {
//     el.addEventListener('input', () => {
//       const raw = el.value;
//       const sanitized = raw.replace(/[^A-Za-z\s]/g, ''); // remove everything except letters & spaces
//       if (raw !== sanitized) {
//         errEl.textContent = 'Only letters and spaces allowed';
//         el.style.border = '1px solid red';
//       } else {
//         errEl.textContent = '';
//         el.style.border = '1px solid #ccc';
//       }
//       if (el.value !== sanitized) el.value = sanitized;
//     });
//   }

//   sanitizeNameInput(firstName, firstNameError);
//   sanitizeNameInput(lastName, lastNameError);

//   // Email input - only lowercase & basic allowed chars
//   emailField.addEventListener('input', () => {
//     const value = emailField.value;
//     if (/[A-Z]/.test(value)) {
//       emailError.textContent = 'Only lowercase letters allowed in email';
//       emailField.style.border = '1px solid red';
//     } else if (!/^[a-z0-9@._+-]*$/.test(value)) {
//       emailError.textContent = 'Invalid character in email';
//       emailField.style.border = '1px solid red';
//     } else {
//       emailError.textContent = '';
//       emailField.style.border = '1px solid #ccc';
//     }
//   });

//   // Number input - digits only while typing
//   numberField.addEventListener('input', () => {
//     const value = numberField.value;
//     if (/[^0-9]/.test(value)) {
//       numberError.textContent = 'Only numbers allowed';
//       numberField.style.border = '1px solid red';
//     } else {
//       numberError.textContent = '';
//       numberField.style.border = '1px solid #ccc';
//     }
//   });

//   // Submit handler
//   form.addEventListener('submit', (e) => {
//     formMsg.textContent = '';
//     let valid = true;

//     const fNameVal = firstName.value.trim();
//     const lNameVal = lastName.value.trim();
//     const emailVal = emailField.value.trim();
//     const phoneVal = numberField.value.trim();
//     const msgVal = messageField.value.trim();

//     // Validate first name
//     if (!fNameVal) {
//       firstNameError.textContent = 'First name is required';
//       firstName.style.border = '1px solid red';
//       valid = false;
//     } else if (!nameAllowed.test(fNameVal)) {
//       firstNameError.textContent = 'Only letters and spaces allowed';
//       firstName.style.border = '1px solid red';
//       valid = false;
//     } else {
//       firstNameError.textContent = '';
//       firstName.style.border = '1px solid #ccc';
//     }

//     // Validate last name
//     if (!lNameVal) {
//       lastNameError.textContent = 'Last name is required';
//       lastName.style.border = '1px solid red';
//       valid = false;
//     } else if (!nameAllowed.test(lNameVal)) {
//       lastNameError.textContent = 'Only letters and spaces allowed';
//       lastName.style.border = '1px solid red';
//       valid = false;
//     } else {
//       lastNameError.textContent = '';
//       lastName.style.border = '1px solid #ccc';
//     }

//     // Validate email
//     if (!emailVal) {
//       emailError.textContent = 'Email is required';
//       emailField.style.border = '1px solid red';
//       valid = false;
//     } else if (/[A-Z]/.test(emailVal) || !emailRegex.test(emailVal)) {
//       emailError.textContent = 'Enter a valid lowercase email';
//       emailField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       emailError.textContent = '';
//       emailField.style.border = '1px solid #ccc';
//     }

//     // Validate phone (9 or 10 digits)
//     if (!phoneRegex.test(phoneVal)) {
//       numberError.textContent = 'Enter valid 9 or 10-digit number';
//       numberField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       numberError.textContent = '';
//       numberField.style.border = '1px solid #ccc';
//     }

//     // Validate message
//     if (!msgVal) {
//       messageError.textContent = 'Message required';
//       messageField.style.border = '1px solid red';
//       valid = false;
//     } else {
//       messageError.textContent = '';
//       messageField.style.border = '1px solid #ccc';
//     }

//     // If invalid, prevent submission; if valid, allow normal submit to Formspree
//     if (!valid) {
//       e.preventDefault();
//       // helpful debug in console
//       console.log('Form validation failed — preventing submit.');
//     } else {
//       // Let the browser submit the form normally to Formspree
//       // Optionally show a small message while it submits:
//       formMsg.style.color = 'green';
//       // formMsg.textContent = 'Submitting…';
//       // Do NOT call e.preventDefault() here
//     }
//   });
// });


window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const emailField = document.getElementById('email');
  const numberField = document.getElementById('number');
  const messageField = document.getElementById('message');

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const numberError = document.getElementById('numberError');
  const messageError = document.getElementById('messageError');
  const formMsg = document.getElementById('formMsg');

  const nameAllowed = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const phoneRegex = /^[0-9]{9,10}$/;

  function sanitizeNameInput(el, errEl) {
    el.addEventListener('input', () => {
      const sanitized = el.value.replace(/[^A-Za-z\s]/g, '');
      if (el.value !== sanitized) {
        errEl.textContent = 'Only letters and spaces allowed';
        el.style.border = '1px solid red';
      } else {
        errEl.textContent = '';
        el.style.border = '1px solid #ccc';
      }
      el.value = sanitized;
    });
  }

  sanitizeNameInput(firstName, firstNameError);
  sanitizeNameInput(lastName, lastNameError);

  emailField.addEventListener('input', () => {
    if (/[A-Z]/.test(emailField.value) || !/^[a-z0-9@._+-]*$/.test(emailField.value)) {
      emailError.textContent = 'Invalid email';
      emailField.style.border = '1px solid red';
    } else {
      emailError.textContent = '';
      emailField.style.border = '1px solid #ccc';
    }
  });

  numberField.addEventListener('input', () => {
    if (/[^0-9]/.test(numberField.value)) {
      numberError.textContent = 'Only numbers allowed';
      numberField.style.border = '1px solid red';
    } else {
      numberError.textContent = '';
      numberField.style.border = '1px solid #ccc';
    }
  });

  form.addEventListener('submit', (e) => {
    let valid = true;

    if (!nameAllowed.test(firstName.value.trim())) {
      valid = false;
      firstNameError.textContent = 'First name required';
    }

    if (!nameAllowed.test(lastName.value.trim())) {
      valid = false;
      lastNameError.textContent = 'Last name required';
    }

    if (!emailRegex.test(emailField.value.trim())) {
      valid = false;
      emailError.textContent = 'Valid email required';
    }

    if (!phoneRegex.test(numberField.value.trim())) {
      valid = false;
      numberError.textContent = 'Valid phone required';
    }

    if (!messageField.value.trim()) {
      valid = false;
      messageError.textContent = 'Message required';
    }

    if (!valid) {
      e.preventDefault();
    } else {
      // formMsg.textContent = 'Submitting…';
      formMsg.style.color = 'green';
    }
  });
});


// Animation

  // Intersection Observer for triggering animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        // entry.target.classList.remove('animate'); // optional (remove if you want one-time animation)
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.box').forEach(box => {
    observer.observe(box);
  });

// Navigation smooth scrolling and mobile menu close
document.addEventListener('DOMContentLoaded', function() {
  // Always scroll to top when page loads (including when returning from form submission)
  window.scrollTo(0, 0);
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Check if it's an anchor link (starts with #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Close the mobile menu if it's open
          const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if (offcanvas) {
            offcanvas.hide();
          }
          
          // Smooth scroll to target with offset for fixed navbar
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Also handle footer links
  const footerLinks = document.querySelectorAll('.Quick_links a');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});