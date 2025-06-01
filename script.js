// JavaScript for About Us page - Popup functionality
document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");

    members.forEach(member => {
        member.addEventListener("click", () => {
            const description = member.getAttribute("data-description");
            popupText.textContent = description;
            popup.classList.add("visible");
        });
    });

    closePopup.addEventListener("click", () => {
        popup.classList.remove("visible");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Features Page Slideshow and Popup
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");

    let currentSlideIndex = 0;
    let slideshowInterval; // For automatic slide transition

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    };

    // Automatic slideshow - moves to the next slide every 5 seconds
    const startSlideshow = () => {
        slideshowInterval = setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }, 5000); // 5000ms = 5 seconds
    };

    // Navigate slides manually with arrows
    leftArrow.addEventListener("click", () => {
        clearInterval(slideshowInterval); // Stop auto-sliding when manually navigating
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Loop to last slide
        showSlide(currentSlideIndex);
        startSlideshow(); // Restart auto-sliding
    });

    rightArrow.addEventListener("click", () => {
        clearInterval(slideshowInterval); // Stop auto-sliding when manually navigating
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop to first slide
        showSlide(currentSlideIndex);
        startSlideshow(); // Restart auto-sliding
    });

    // Open popup with feature description on slide click
    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            popupText.textContent = slide.getAttribute("data-description");
            popup.classList.add("visible");
        });
    });

    // Close popup
    closePopup.addEventListener("click", () => {
        popup.classList.remove("visible");
    });

    // Initialize
    showSlide(currentSlideIndex);
    startSlideshow(); // Start automatic slide transition
});


// JavaScript for dynamically adding blog entries
document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
    const addBlogButton = document.getElementById("add-blog");

    // Example blog entries
    const blogs = [
        {
            title: "Exciting New Feature Update",
            content: "We've launched our latest feature for seamless AR interactions.",
            image: "update1.jpg", // Replace with actual image path
        },
        {
            title: "Release Notes - March 2025",
            content: "This update includes performance improvements and bug fixes.",
            image: "update2.jpg", // Replace with actual image path
        },
    ];

    // Function to render blogs
    const renderBlogs = () => {
        blogContainer.innerHTML = ""; // Clear the container
        blogs.forEach((blog, index) => {
            const blogEntry = document.createElement("div");
            blogEntry.classList.add("blog-entry");
            blogEntry.innerHTML = `
                <img src="${blog.image}" alt="Blog Image">
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
            `;
            blogContainer.appendChild(blogEntry);
        });
    };

    // Add a new blog dynamically
    addBlogButton.addEventListener("click", () => {
        const newBlog = {
            title: "New Blog Title",
            content: "This is the content of the new blog. Update it as needed.",
            image: "default.jpg", // Replace with a default or placeholder image
        };
        blogs.push(newBlog); // Add new blog to the array
        renderBlogs(); // Re-render the blogs
    });

    renderBlogs(); // Initial rendering
});
