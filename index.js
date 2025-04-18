function msg(){
    //alert('Hello, World!');
    
    fetch('http://localhost:8081/services/generic/helloWorld')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Response data:', data);

            // Display the data in an alert
            alert(`Response Data:\n${JSON.stringify(data, null, 2)}`); // Pretty-print JSON data in the alert

            // Display the data in the UI
            const displayElement = document.getElementById('responseDisplay'); // Ensure this element exists in your HTML
            displayElement.innerText = JSON.stringify(data, null, 2); // Pretty-print JSON data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data from the server.');
        });
}
