// function strength(password)
// {
	
// 	let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
// 	let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
//   let strengthBadge = document.getElementById('StrengthDisp')

// /*var x = document.getElementById("i");
  
//     if (x.style.display == "block") {
//         x.style.display = "none";
        
//       } else {
//         x.style.display = "block";
        
//       }*/
//         // We then change the badge's color and text based on the password strength

//         if(strongPassword.test(password)) {
//             //document.getElementById("pass").innerHTML = "Strong!!";
//             strengthBadge.style.backgroundColor = "green"
//             strengthBadge.textContent = 'Password Strength: Strong'
//         } else if(mediumPassword.test(password)){
//            // document.getElementById("pass").innerHTML = "Medium!!";
//            strengthBadge.style.backgroundColor = "blue"
//             strengthBadge.textContent = 'Medium'
//         } else{
//            //document.getElementById("pass").innerHTML = "Weak!!"; 
//            strengthBadge.style.backgroundColor = "red"
//             strengthBadge.textContent = 'Password Strength: Weak'
//         }
//   /*var x = document.getElementById("i");
  
//     if (x.style.display == "block") {
//         x.style.display = "none";
        
//       } else {
//         x.style.display = "block";
        
//       }
//       /*var category = document.get
//       console.log(category);*/

// }