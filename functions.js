function create_ftp(){
    const apiUrl = 'https://echo.zuplo.io/';
    const formData = {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'securepassword123',
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            alert('Done!');
            return response.json();
        }
        
    })
    .then(newUserData => {    
        console.log('New User Data:', newUserData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}