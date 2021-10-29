document.querySelector('.modal-body').innerHTML = `
    <h3>REGISTER</h3>
                        
    <div class="form-group">
        <label class="pull-left">First Name</label>
        <input type="text" name="firstName" class="form-control" id="firstName" value="">

        <label class="pull-left">Last Name</label>
        <input type="text" name="lastName" class="form-control" id="lastName" value="">

        <label class="pull-left">Address</label>
        <input type="text" name="address" class="form-control" id="address" value="">

        <label class="pull-left">Country</label>
        <input type="text" name="country" class="form-control" id="country" value="">

        <label class="pull-left">Phone Number</label>
        <input type="text" name="phoneNumber" class="form-control" id="phoneNumber" value="">

        <div class="emailInputField">
            <label class="pull-left">Email</label>
            <input type="text" name="email" class="form-control" id="email" value="" required>
        </div>
        
    </div>
    
    <div class="modal-footer">
        <button type="button" id="submitFormBtn" class="pull-left btn btn-lg">Send</button>
    </div>
`
