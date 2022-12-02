alert("this is an alert")

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

inBetween= false;

function handleCheck(e){
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox=>
            {
            console.log(checkbox)
            if(checkbox === this || checkbox===lastChecked){
                inBetween = !inBetween


            }
            if(inBetween){
                checkbox.checked = true;

            }

            })
    }
    lastChecked = this
    console.log(lastChecked)
      
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))