
document.addEventListener('userRegistered', e => {
    console.log(`A new user registered for the event: ${e.detail} 🎉`); 
    showConfirmationModal(e.detail.user)
});

function printRegistrationReceipt(){
    var prtContent = document.querySelector(".registration-receipt");
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

    const regex = /X/i;
    WinPrint.document.write(prtContent.innerHTML.replace(regex, ''));
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
}

function showConfirmationModal(user){
    document.querySelector('.modal-body').innerHTML = `
    <h1>Thanks for Registering!</h1>

    <div class="registration-receipt">
        <h3>Your IMJ Registration Receipt</h3>

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
    </div>

    <div class="modal-footer">
        <button type="button" onclick="printRegistrationReceipt()" class="pull-left btn btn-lg">Print</button> 
    </div>
`
}


