const db = firebase.firestore();
const mainDiv = document.querySelector('#main'); 
const myArray = [];

db.collection("plants").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const data = doc.data();
        myArray.push(data);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        mainDiv.innerHTML += `
        <div class="card">
            <h1>${data.name}</h1>
            <span>${data.sciName}</span>
            <span>${data.price}</span>
            <span>${data.info}</span>
            <img src=""/>
        </div>
        `
    });
    // myArray.map()
});