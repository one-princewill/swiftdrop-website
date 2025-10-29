// Mobile navbar display
const mobileNavBtn = document.getElementById('mobile-navbtn')
const mobileNavBtnClose = document.getElementById('mobile-navbtn-close')
const mobileMenu = document.querySelector('.mobile-navbar-content')

mobileNavBtn.addEventListener('click', e => {
  mobileMenu.classList.toggle("mobile-navbar-show")

  const isOpen = mobileMenu.classList.contains("mobile-navbar-show")

  mobileNavBtn.innerHTML = isOpen ? `<i class='bx  bx-x'  ></i>` : `<i class='bx  bx-menu-wider'  ></i>`
});

const navBtn = document.querySelectorAll("#navBtn")

navBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    if (mobileMenu.classList.contains("mobile-navbar-show")) {
      mobileMenu.classList.remove("mobile-navbar-show")
      mobileNavBtn.innerHTML = "<i class='bx  bx-menu-wider'  ></i>"
    }
  })
})

// Accordion Content design & display
const accordionCards = document.querySelectorAll(".accordion-card");

accordionCards.forEach(card => {
  const content = card.querySelector(".accordion-content");

  card.addEventListener("click", () => {
    accordionCards.forEach(c => {
      if (c !== card) {
        c.classList.remove("accordion-active");
        c.querySelector(".accordion-content").style.maxHeight = "0px";
      }
    });

    card.classList.toggle("accordion-active");

    if (card.classList.contains("accordion-active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
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
      errorMsg.textContent = "*You'll be redirected shortly*"
      waitlistForm.submit()
      waitlistForm.reset()
    }
});