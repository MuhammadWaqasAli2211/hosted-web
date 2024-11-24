// Function to display the form and populate it with the plan's details
function showForm(plan) {
    const formContainer = document.querySelector(".form-container");
    formContainer.style.display = "flex";  // Make sure the form is visible when a plan is selected

    // Populate the form fields
    const inputs = formContainer.querySelectorAll("input");
    inputs[0].value = ""; // User's name
    inputs[1].value = ""; // Email address
    inputs[2].value = plan.name; // Selected plan
    inputs[3].value = ""; // Paid or not
}

// Function to hide the form
function hideForm() {
    const formContainer = document.querySelector(".form-container");
    formContainer.style.display = "none"; // Hide the form
}

// Add event listeners to the buttons for each hosting plan
document.querySelectorAll(".card .button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const plans = [standard, enhanced, elite];
        showForm(plans[index]);
    });
});

// Add event listener to the "Close Form" button
document.getElementById("redBtn").addEventListener("click", hideForm);

// Add event listener to the "Submit Response" button
document.getElementById("greenBtn").addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    const inputs = formContainer.querySelectorAll("input");

    const userName = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const plan = inputs[2].value.trim();
    const paidStatus = inputs[3].value.trim();

    // Check if all fields are filled
    if (userName && email && plan && paidStatus) {
        alert(`Response Submitted!\n\nName: ${userName}\nEmail: ${email}\nPlan: ${plan}\nPaid: ${paidStatus}`);
        hideForm(); // Optionally hide the form after submission
    } else {
        alert("Please fill out all fields before submitting!");
    }
});

function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

var standard = new HostingPlan(
    "Standard Subscription",
    "$5 /Month",
    ["10GB Storage", "100GB Bandwidth", "1 Domain"],
    "Email Support"
);

var enhanced = new HostingPlan(
    "Pro Plan",
    "$15 /Month",
    ["50GB Storage", "500GB Bandwidth", "5 Domains"],
    "Email + Phone Support"
);

var elite = new HostingPlan(
    "Business Plan",
    "$25 /Month",
    ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
    "24/7 Support"
);
