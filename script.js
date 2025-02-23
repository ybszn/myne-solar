// Simple alert for the contact button on the homepage
function showContactAlert() {
    alert("Contact us at info@myne.solar or +234-XXX-XXX-XXXX to get started!");
}

// Add event listener if you want to expand interactivity
document.querySelector('.hero-content button').addEventListener('click', showContactAlert);