//Selezionare la row all'interno della quale produrre photo-item
const gallery = document.getElementById('gallery')
// console.log(gallery)

//ENDOPOINT
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'


//Funzione per creare photo-item 
const generatePhotoItem = (domElement) =>{
    //Svuota gallery
    domElement.innerHTML = '';

    //API Request
    axios.get(endpoint).then((res) =>{
        //forEach  
        res.data.forEach(item => {
            //generate HTML String for img and text
            let string = `
                 <div class="col-sm-12 col-md-6 col-lg-4" id="gallery">
                     <div class="photo-item ">
                         <div class="photo-image">
                             <img class=" img-fluid" src="${item.url}" alt="">
                         </div>
                         <div class="photo-desc text-center text-md-start"> <div class='photo-date text-secondary'>${item.date}</div> <div class='photo-title'>${item.title}</div></div>
                     </div>
                     <img src='./img/pin.svg' class='pin'>
                 </div>
             `
            domElement.innerHTML += string
        });
    })
}

generatePhotoItem(gallery)


