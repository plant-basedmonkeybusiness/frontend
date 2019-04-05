//

const db = firebase.firestore();
const auth = firebase.auth();
const mainDiv = document.querySelector('#main');
const myArray = [];
const priceFilter = document.querySelector("#price-filter");
const alphabet = document.querySelector("#alphabet-sort");
const addCard = (data) => {
    mainDiv.innerHTML += `
    <div class="card">
        <img src="${data.image}" class="plant-img">
        <div id="txt-holder">    
            <h4 class="common-name">${data.name}</h4>
            <span class="price">$${data.price}</span>
        </div>
        <span class="sci-name">${data.sciName}</span>
        <p class="description">${data.info}</p>
    </div>
    `
}
db.collection("plants").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            myArray.push(data);
            addCard(data);
        })
    });
priceFilter.addEventListener("click", (e) => {
    const price = myArray.filter(data => data.price < 25)
    mainDiv.innerHTML = "";
    price.forEach(plant => {
        addCard(plant);
    })
});
alphabet.addEventListener("click", (e) => {
    const nameOrder = myArray.sort((a, b) => {
        if (a.sciName < b.sciName) { return -1; }
        if (b.sciName > a.sciName) { return 1; }
        return 0;
    })
    mainDiv.innerHTML = "";
    nameOrder.forEach(alphabet => {
        addCard(alphabet)
    }) 
    
})
