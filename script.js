// Sample Job Data
const jobs = [
    { title: "Web Developer", location: "Mumbai", company: "TechCorp", category: "Developer", salary: 60000, jobType: "Full-time" },
    { title: "Software Engineer", location: "Delhi", company: "InnoSoft", category: "Developer", salary: 70000, jobType: "Remote" },
    { title: "UI/UX Designer", location: "Bangalore", company: "Designify", category: "Designer", salary: 50000, jobType: "Internship" },
    { title: "Backend Developer", location: "Pune", company: "CodeWorks", category: "Developer", salary: 65000, jobType: "Full-time" },
    { title: "Data Analyst", location: "Hyderabad", company: "DataMax", category: "Data", salary: 55000, jobType: "Full-time" }
];

// Function to Search Jobs with Filters and Sorting
function searchJobs() {
    const jobTitle = document.getElementById("job-title").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();
    const category = document.getElementById("category").value.toLowerCase();
    const jobType = document.getElementById("job-type").value.toLowerCase();
    const sortBy = document.getElementById("sort-by").value;
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Filter jobs based on input
    let filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(jobTitle) &&
        job.location.toLowerCase().includes(location) &&
        (category ? job.category.toLowerCase().includes(category) : true) &&
        (jobType ? job.jobType.toLowerCase().includes(jobType) : true)
    );

    // Sort jobs based on selected criteria
    filteredJobs.sort((a, b) => {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortBy === "company") {
            return a.company.localeCompare(b.company);
        } else {
            return a.location.localeCompare(b.location);
        }
    });

    // Display results
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job-card");
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
                <p>Category: ${job.category}</p>
                <p>Salary: ₹${job.salary}</p>
                <p>Job Type: <span class="tag">${job.jobType}</span></p>
                <button onclick="openApplicationModal('${job.title}')">Apply</button>
            `;
            resultsDiv.appendChild(jobElement);
        });
    } else {
        resultsDiv.innerHTML = "<p>No jobs found. Try different keywords.</p>";
    }
}

// Function to open job application modal
function openApplicationModal(jobTitle) {
    document.getElementById('application-modal').style.display = 'block';
}

// Function to close the application modal
function closeApplicationModal() {
    document.getElementById('application-modal').style.display = 'none';
}
