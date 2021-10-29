let submitBtn = document.querySelector('#submitFormBtn')

if(submitBtn){
    submitBtn.addEventListener("click", function(){
        let formData = getFormData();

        if(formData['email']!=''){
            postEmailData(formData);
            document.querySelector(".modal-body").innerHTML = `
                <img src='../img/processing.gif' />
            `
        } else {
            document.querySelector('.emailInputField').innerHTML = `
                <div class="form-group has-error">
                    <label class="pull-left">Email</label>
                    <input type="text" name="email" class="form-control" id="email" value="" required>
                    <span class="help-block">Email is required</span>
                </div>
            `
        }
      });
}

function getFormData(){
    let formData = {};
    document.querySelectorAll('.form-group input').forEach((elem)=>{
        formData[elem.id] = elem.value
    })
    return formData;
}
  

function postEmailData(formData){
    fetch('/api/v1/newemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(response => response.json())
        .then(data => {
            console.log('response from server: ',data)  
            document.dispatchEvent(new CustomEvent('userRegistered', {
                detail: data
            }));
        });   
}
