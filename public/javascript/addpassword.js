const apform = document.getElementById('addpasswordform');
// const passwod_category = document.getElementById('password_category');
// const username = document.getElementById('username');
// const password_hint = document.getElementById('password_hint');
// const password = document.getElementById('password');


apform.addEventListener('submit', async(e) =>{
    const password_category = apform.password_category.value;
    const username_a = apform.username.value;
    const password_hint = apform.password_hint.value;
    const password_a = apform.password.value;
    const value = password_a;
    
  /*let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
     if(strongPassword.test(password_a)) 
     {
      password_strength = 100;
     }
    else if(mediumPassword.test(password_a))
    {
      password_strength = 50;
    }
    else
      password_strength = 25;*/

        var numbers = 0;
        var chars = 0;
        var special = 0;
        var lower = 0;
        var upper = 0;
        var unicode = 0;
        var max = 0;
        var points = 0;
        var numbersseq = false;
        var charsseq = false;
    
        for (var i = 0; i < value.length; i++) {
    
          var prev2 = i > 1 ? value.charCodeAt(i - 2) : 0;
          var prev = i ? value.charCodeAt(i - 1) : 0;
          var c = value.charCodeAt(i);
    
          if (c > 47 && c < 58) {
    
            if ((c + 1 === prev || c - 1 === prev) && (c + 2 === prev2 || c - 2 === prev2))
              numbersseq = true;
    
            numbers++;
            continue;
          }
    
          if (c > 64 && c < 91) {
    
            if ((c + 1 === prev || c - 1 === prev) && (c + 2 === prev2 || c - 2 === prev2))
              charsseq = true;
    
            upper++;
            chars++;
            continue;
          }
    
          if (c > 96 && c < 123) {
            lower++;
            chars++;
            continue;
          }
          else if ((c>32 && c<48) || (c>57 && c<65) || (c>90 && c<97) ||(c>122 && c<127)) {
            special++;
            chars++;
          }
        }
         var password_strength = points;
        if((upper>0) && (special>0)  && (numbers>0))
        {
          points = numbers + chars + special;
            password_strength = points;
        }
        else
        {
          points = numbers + chars + special;
          points=points%6;
          if(points==0)
            points=1;
           password_strength = points;
        }
     
   



    try {
        const res = await fetch('/addpassword', { 
          method: 'POST', 
          body: JSON.stringify({ password_category, username_a, password_hint, password_a, password_strength}),
          headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if (data.errors) {
        }
        if (data.user) {
          console.log('successful')
        }
      }
      catch (err) {
        console.log(err);
      }
});