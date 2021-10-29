
document.addEventListener('userRegistered', e => {
    console.log(`A new user registered for the event: ${e.detail} 🎉`); 
    showConfirmationModal(e.detail.user)
});

function showConfirmationModal(user){
    document.querySelector('.modal-body').innerHTML = `
    <h1>Thanks for Registering!</h1>

    <table class="table table-sm table-success">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">First Name</th>
                <td>${user.firstName}</td>
            </tr>
            <tr>
                <th scope="row">Last Name</th>
                <td>${user.lastName}</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td>${user.email}</td>
            </tr>
            <tr>
                <th scope="row">Address</th>
                <td>${user.address}</td>
            </tr>
            <tr>
                <th scope="row">Country</th>
                <td>${user.country}</td>
            </tr>
            <tr>
                <th scope="row">Phone Number</th>
                <td>${user.phoneNumber}</td>
            </tr>
        </tbody>
    </table>
`
}


