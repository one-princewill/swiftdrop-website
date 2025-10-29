// Mobile navbar display
const mobileNavBtn = document.getElementById('mobile-navbtn')
const mobileNavBtnClose = document.getElementById('mobile-navbtn-close')
const mobileMenu = document.querySelector('.mobile-navbar-content')

mobileNavBtn.addEventListener('click', e => {
    mobileNavBtn.style.display = 'none'
    mobileMenu.style.display = 'block'
    mobileNavBtnClose.style.display = 'block'
});

mobileNavBtnClose.addEventListener('click', e => {
    mobileNavBtn.style.display = 'block'
    mobileMenu.style.display = 'none'
    mobileNavBtnClose.style.display = 'none'
})

// Accordion Content design & display
const accordionCards = document.querySelectorAll(".accordion-card");

accordionCards.forEach(card => {
  const content = card.querySelector(".accordion-content");

  card.addEventListener("click", () => {
    accordionCards.forEach(c => {
      if (c !== card) {
        c.classList.remove("accordion-active");
        c.querySelector(".accordion-content").style.display = "none";
      }
    });

    card.classList.toggle("accordion-active");

    if (card.classList.contains("accordion-active")) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});


// Form validation and submission
let errorMsg = document.querySelector('#error-message')
const waitlistForm = document.querySelector('#waitlist-form')

waitlistForm.addEventListener('submit', e => {
    e.preventDefault()
    errorMsg.style.display = 'none'

    const email = document.querySelector('#email').value.trim()

    if (email === "") {
        errorMsg.style.display = 'block'
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsg.style.display = 'block'
        errorMsg.textContent = '*Email not correct*'
        return;
    }

    else {
        errorMsg.style.display = 'block'
        errorMsg.style.color = 'green'
        errorMsg.textContent = "*You'll be Redirected*"
        waitlistForm.reset();
        waitlistForm.submit()
    }
});