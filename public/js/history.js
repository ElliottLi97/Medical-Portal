const historyFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the history form
    const height = document.querySelector('#height').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const allergies = document.querySelector('#allergies').value.trim();
    const medications = document.querySelector('#medications').value.trim();
    const data = document.querySelector('#data').value.trim();
    
    const response = await fetch('/api/historyRoutes/edit', {
        method: 'PUT',
        body: JSON.stringify({ height, weight, allergies, medications, data }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/');
    } else {
    alert(response.statusText);
    }
}

document.querySelector('#edit-history-form').addEventListener('submit', historyFormHandler);