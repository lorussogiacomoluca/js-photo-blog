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
                         <div class="photo-desc text-center text-md-start">${item.date} - ${item.title}</div>
                     </div>
                 </div>
             `
            domElement.innerHTML += string
        });
    })
}

generatePhotoItem(gallery)


