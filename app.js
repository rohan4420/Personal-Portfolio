var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-container")

function opentab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0px";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

// for submission of contact me
const scriptURL = 'https://script.google.com/macros/s/AKfycbxaeMtldyHVQXeHYUF-z6WLEyx0JUzj592TaAjZJ2MOW6FeolI2cbfXW2R8eJXKWegX/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message Sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000 )
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    
