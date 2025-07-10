document.addEventListener("DOMContentLoaded", () => {
    // Popup elements shared across all pages
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.getElementById("close-popup");

    // ✅ About Page
    const members = document.querySelectorAll(".member");
    if (members.length > 0) {
        members.forEach((member) => {
            member.addEventListener("click", () => {
                const description = member.getAttribute("data-description");
                popupText.innerHTML = description;
                popup.classList.add("visible");
            });
        });
    }

    // ✅ Features Page
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const slideshow = document.querySelector(".slideshow");

    if (slides.length > 0 && leftArrow && rightArrow && slideshow) {
        let currentSlideIndex = 0;
        let slideshowInterval;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        };

        const startSlideshow = () => {
            slideshowInterval = setInterval(() => {
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                showSlide(currentSlideIndex);
            }, 5000);
        };

        leftArrow.addEventListener("click", () => {
            clearInterval(slideshowInterval);
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
            startSlideshow();
        });

        rightArrow.addEventListener("click", () => {
            clearInterval(slideshowInterval);
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
            startSlideshow();
        });

        slides.forEach((slide, index) => {
            slide.addEventListener("click", () => {
                if (slide.classList.contains("active")) {
                    const description = slide.getAttribute("data-description");
                    popupText.innerHTML = description;
                    popup.classList.add("visible");
                }
            });
        });

        showSlide(currentSlideIndex);
        startSlideshow();
    }

    // ✅ Blog Page
    const blogContainer = document.getElementById("blog-container");
    const addBlogButton = document.getElementById("add-blog");

    if (blogContainer && addBlogButton) {
        const blogs = [
            {
                title: "Exciting New Feature Update",
                content: "We've launched our latest feature for seamless AR interactions.",
                image: "update1.jpg",
            },
            {
                title: "Release Notes - March 2025",
                content: "This update includes performance improvements and bug fixes.",
                image: "update2.jpg",
            },
        ];

        const renderBlogs = () => {
            blogContainer.innerHTML = "";
            blogs.forEach((blog) => {
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

        addBlogButton.addEventListener("click", () => {
            const newBlog = {
                title: "New Blog Title",
                content: "This is the content of the new blog. Update it as needed.",
                image: "default.jpg",
            };
            blogs.push(newBlog);
            renderBlogs();
        });

        renderBlogs();
    }

    // ✅ Close popup globally
    if (closePopup) {
        closePopup.addEventListener("click", () => {
            popup.classList.remove("visible");
        });
    }
});
