
let forme= document.getElementById('container');
form.addEventListener('submit', e => {
   e.preventDefault();

   validate();
});



function isValidEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}
function isValidPhone(phone) {
   const re = /^[0-9]+$/;
   return re.test(phone);
   console.log(phone);
   console.log(re.test(phone));
}


function validate()
{
const namee = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const nameValue = namee.value.trim();
const emailValue = email.value.trim();
const phoneValue = phone.value.trim();
const messageValue = message.value.trim();
   console.log(namee);
      if(nameValue === '') {
         
         alert("Please Provide Name!");
         namee.focus();
         return false;}
         else if (!isValidEmail(emailValue)){
            if(emailValue==''){
               alert("Please Provide email")

               email.focus()}
               else{
                  alert("Please Provide A valid email adress");

               email.focus() 
               }}
         else if(!isValidPhone(phoneValue)) {
            console.log(phoneValue)
            if(phoneValue==''){
            alert("Please Provide Phone!");
            phone.focus();
            }
            else{
               alert("Please Provide Valid Phone!");
               phone.focus();

            }
         }
         
         else if(messageValue === '') {
            alert("Please Provide Message!");
            message.focus();
            return false;}
            else{
               forme.style.display = "none";
               document.getElementById('thankyou').style.display = "block";
            };

      }
 
