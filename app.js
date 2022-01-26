const email = document.getElementById('email');
const emailError = document.getElementById('emailError'); 



btn.addEventListener("click", function(e) {
e.preventDefault();
 
if (!email.value.includes('@') || email.value.length === 0){
emailError.classList.remove('emailError')
} 
else{
emailError.classList.add('emailError')
}

});