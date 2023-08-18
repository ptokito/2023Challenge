// Experience section logic
document.addEventListener("DOMContentLoaded", function() {
    const experienceSection = document.getElementById("experience");

    const experiences = [
        {
            jobTitle: "Front-end Developer",
            company: "Company A",
            year: "2019-2021",
            description: "Developed responsive web applications using React and Vue."
        },
        {
            jobTitle: "Back-end Developer",
            company: "Company B",
            year: "2017-2019",
            description: "Worked with Node.js and Express to build scalable APIs."
        }
    ];

    experiences.forEach(exp => {
        const expDiv = document.createElement("div");
        expDiv.innerHTML = `
            <h3>${exp.jobTitle} at ${exp.company}</h3>
            <p>${exp.year}</p>
            <p>${exp.description}</p>
        `;
        experienceSection.appendChild(expDiv);
    });
});

// Visitor counter logic
document.addEventListener("DOMContentLoaded", function() {
    const visitorCountElement = document.getElementById("visitorCount");
    let visitorCount = localStorage.getItem("visitorCount") || 0;

    // Increment the count
    visitorCount++;

    // Store the updated count back to localStorage
    localStorage.setItem("visitorCount", visitorCount);

    // Display the count
    visitorCountElement.textContent = visitorCount;
});
