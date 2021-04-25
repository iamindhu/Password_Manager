// async function deletehistory(){

// var x=document.getElementsByTagName("input");
// var id=[];
// for(var i=0;i<x.length;i++){
//     if(x[i].type="checkbox"){
//         if(x[i].checked==true){
//             id.push(x[i].id);
//         }
//     }
// }
// if(id.length>0){
//     try {
//         const res = await fetch('/delhistory', { 
//           method: 'POST', 
//           body: JSON.stringify({id}),
//           headers: {'Content-Type': 'application/json'}
//         });
//         const data = await res.json();
//         console.log(data);
//         if (data.status) {
//           location.assign('/accounthistory');
//         }
//         else {
//             alert('Invalid Password');
//         }
//       }
//       catch (err) {
//         console.log(err);
//       }
// }

// }
// function toolbar() {
//   var x=document.getElementsByTagName("input");
// var id=[];
// for(var i=0;i<x.length;i++){
//     if(x[i].type="checkbox"){
//         if(x[i].checked==true){
//             id.push(x[i].id);
//         }
//     }
// }  
// if(id.length>=1)
//   document.getElementById("toolbar").style.top = "40";
//   else
//   document.getElementById("toolbar").style.top = "0";


// }