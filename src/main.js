// Navbar Logic
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('nav');
    const dropdown = document.getElementById('mega-menu-full-dropdown');
    const navbarToggle = document.getElementById('navbar-toggle');
    const dropdownToggle = document.getElementById('mega-menu-full-dropdown-button');

    // Toggle navbar
    navbarToggle.addEventListener('click', (e) => {
        document.getElementById(navbarToggle.getAttribute('data-collapse-toggle')).classList.toggle('hidden');
        dropdown.classList.add('hidden');
    });

    // Toggle dropdown
    dropdownToggle.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

    // Close navbar and dropdown on outside click
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !dropdown.contains(event.target)) {
            document.getElementById(navbarToggle.getAttribute('data-collapse-toggle')).classList.add('hidden');
            dropdown.classList.add('hidden');
        }
    });
});

function previewFile() {
    var preview = document.querySelector('.file-preview');
    var fileInput = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var img = preview.querySelector('.thumbnail-proof'); // Get the thumbnail image element
        img.src = reader.result; // Update src attribute with the uploaded file
        preview.classList.remove('hidden'); // Remove the 'hidden' class to display the preview
    }

    if (fileInput) {
        reader.readAsDataURL(fileInput);
    } else {
        preview.classList.add('hidden'); // Hide preview if no file selected
    }
}

function copyTextFunc(id) {
    var copyText = document.getElementById(id);

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);
}

// Testimonial Function
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});


// Search Function
const searchInput = document.getElementById('searchInput');
const resetButton = document.getElementById('resetButton');

searchInput.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        resetButton.classList.remove('hidden');
    } else {
        resetButton.classList.add('hidden');
    }
});

resetButton.addEventListener('click', function () {
    resetButton.classList.add('hidden');
});