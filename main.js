const db = firebase.firestore();
const auth = firebase.auth();
const mainDiv = document.querySelector('#main'); 
const myArray = [];
const priceFilter = document.querySelector("#price-filter");
const alphabet = document.querySelector("#alphabet-sort");

db.collection("plants").get()
.then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        const data = doc.data();
        myArray.push(data);
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
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
    priceFilter.addEventListener("click",(e) => {
    const price = myArray.filter(plantObj => {
        
        return plantObj.price < 30;
       
    });
    console.log(price)

   
});
 alphabet.addEventListener("click",(e) => {
        const name = myArray.sort(plantObj => {

            return plantObj.comName
           
        });
        console.log(name)
    })


    alphabet.addEventListener("click",(e) => {
   
        const name = myArray.sort((a, b) => {
        if(a.sciName < b.sciName) { return -1; }
        if(b.sciName > a.sciName) { return 1; }
        return 0;
    })
    console.log(name)
})

})
