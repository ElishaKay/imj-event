let submitBtn = document.querySelector('#submitFormBtn')

if(submitBtn){
    submitBtn.addEventListener("click", function(){
        let formData = getFormData();
        let postRequestStatus = postEmailData(formData);
        document.querySelector(".modal-content").innerHTML = postRequestStatus;
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
            console.log(data)  
            return data
        });   
}
