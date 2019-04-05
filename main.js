//

const db = firebase.firestore();
const auth = firebase.auth();
const mainDiv = document.querySelector('#main');
const myArray = [];
// hér er tómt array því við push-um data upplýsingunum inn í. 
const priceFilter = document.querySelector("#price-filter");
const alphabet = document.querySelector("#alphabet-sort");

// Þetta er function sem skilar korti og tekur inn data sem parameter 
//  
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
// hér erum við að setja cardið inn í firebase 
//querySnapshot kemur úr firebase, og er tengt því collection-i. 
db.collection("plants").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // doc.data , þá fæðu aðgang að öllum property-um 
            //úr hverju staki í array
            myArray.push(data);
            addCard(data);
        })
    });

    // þetta er event-listener á takkann til að taka út verð sem eru yfir $25
    // til þess er notað filter arrowfunction sem return-ar, þess vegna er ekki curly braces 
priceFilter.addEventListener("click", (e) => {
    const price = myArray.filter(data => data.price < 25)
    mainDiv.innerHTML = "";
    price.forEach(plant => {
        // í klassískri forlúppu væri plant =  price[i] 
        // forEach er forlykkja sem fer í gegnum öll price tög inni í array og skilar þeim stökum sem 
        // falla undir skilyrðið "undir 25"
        // svo kallað á cardið hér að neðan. 
        addCard(plant);
    })
});
    // hér er sett click-event á sort takkann, til að breyta úr stafrófsröð comName yfir í stafrófsröð sciName
    // þá er notað sort en ekki filter, til að breyta röðuninni á array en ekki taka neitt út. 
    // sort tekur inn 2 parametra til þess að geta forgangsraðað. 
alphabet.addEventListener("click", (e) => {
    const nameOrder = myArray.sort((a, b) => {
        // forgangsröðun, ef b er stærra en a, þá svissast þeir, en ef b er á undan þá helst röðunin. 
        // annars 
        if (a.sciName < b.sciName) { return -1; }
        if (b.sciName > a.sciName) { return 1; }
        return 0;
    })
    // hér er div-ið hreinsað svo það komi ekki nýjar niðurstöður undir fyrri niðurstöðum. 
    // nameOrder er orðið array í röð sem við viljum hafa / ýttum á takkann fyrir, og svo skilum við 
    //  cardinu inn í div-ið í HTML. 
    mainDiv.innerHTML = "";
    nameOrder.forEach(alphabet => {
        addCard(alphabet)
    }) 
    
})
// Hákon + Gummi 