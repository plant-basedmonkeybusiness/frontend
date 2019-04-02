const db = firebase.firestore();
const mainDiv = document.querySelector('#main'); 

fetch("http://localhost:3000/plants")
.then(r => r.json())
.then(data=>{

    data.forEach( data =>{
        mainDiv.innerHTML +=
        
        `
        <div class="card">
            <span>${data.scientific_name}</span>
        </div>
        `
    })
})


// db.collection("images").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         const data = doc.data();
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         mainDiv.innerHTML += `
//         <h1>${data.name}</h1>
//         <span>${data.year}</span>
//         <span>${data.rate}</span>
//         <img src="${data.url}">
//         `
//     });
// });