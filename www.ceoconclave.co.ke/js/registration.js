// Google Sheets API Configuration
const GOOGLE_SHEETS_API = {
    SPONSOR_SHEET: 'https://script.google.com/macros/s/AKfycbwtwSFTsTBrbQdavUb3GXppxHHtrkXbQ_HGNUsZJIRDD_y4UqIcUaJJI3YCoSYDYrQK/exec',
    PARTNER_SHEET: 'https://script.google.com/macros/s/AKfycbxrqG62rLJrsHKZNOZ0FprU8vbZx42upu3WfYfxmtItJ_NMSiEeUZJSvnAI4LdOP39m/exec'
};

// Form submission handler for all registration types
function handleRegistration(formType) {
    const forms = { 
        sponsor: {
            form: document.querySelector('#sponsorModal form'),
            endpoint: GOOGLE_SHEETS_API.SPONSOR_SHEET,
            successMessage: 'Sponsorship request submitted successfully!'
        },
        partner: {
            form: document.querySelector('#partnerModal form'),
            endpoint: GOOGLE_SHEETS_API.PARTNER_SHEET,
            successMessage: 'Partnership request received!'
        }
    };

    const currentForm = forms[formType];

    currentForm.form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        const submitButton = currentForm.form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;

        // Gather all form data
        const formData = new FormData();

        // Add selected package type
        const selectedType = document.querySelector(`input[name="${formType}Type"]:checked`).value;
        formData.append('registrationType', selectedType);

        // Add timestamp
        formData.append('submissionDate', new Date().toISOString());

        // Collect all input fields
        const inputs = currentForm.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            formData.append(input.placeholder.toLowerCase().replace(/\s+/g, '_'), input.value);
        });

        try {
            const response = await fetch(currentForm.endpoint, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            showNotification(currentForm.successMessage, 'success');
            currentForm.form.reset();
            closeModal(`${formType}Modal`);

        } catch (error) {
            showNotification('Registration failed. Please try again.', 'error');
            console.error('Registration error:', error);
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } z-50 transition-opacity duration-300`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize registration handlers
document.addEventListener('DOMContentLoaded', () => {
    handleRegistration('sponsor');
    handleRegistration('partner');
});