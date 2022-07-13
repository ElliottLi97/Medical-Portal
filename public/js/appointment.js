const appointmentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the appointment form
    const datetime = document.querySelector('#datetime').value.trim();
    const doctor_id = document.querySelector('#doctor_id').value.trim();
    const concern = document.querySelector('#concern').value.trim();
console.log(datetime);
    /* const response = await fetch('/api/apptRoutes/add', {
        method: 'POST',
        body: JSON.stringify({ datetime, doctor_id, concern }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/');
    } else {
        console.log("error")
    alert(response.statusText);
    } */
}

document.querySelector('#add-appointment-form').addEventListener('submit', appointmentFormHandler);