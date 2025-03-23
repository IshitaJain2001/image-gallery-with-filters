

let NatureArray=["assets/nature/natureimg1.jpg","assets/nature/natureimg2.jpg", "assets/nature/natureimg3.jpg","assets/nature/natureimg4.jpg" , "assets/nature/natureimg5.jpg", "assets/nature/natureimg6.jpg","assets/nature/natureimg7.jpg","assets/nature/natureimg8.jpg"]
let CodingArray=["assets/coding/codingimg1.jpg","assets/coding/codingimg2.jpg","assets/coding/codingimg3.jpg", "assets/coding/codingimg4.jpg","assets/coding/codingimg5.jpg","assets/coding/codingimg6.jpg","assets/coding/codingimg7.jpg","assets/coding/codingimg8.jpg","assets/coding/codingimg9.jpg"]
let card1= document.querySelector('.card-1')
let card2= document.querySelector('.card-2')
let card3= document.querySelector('.card-3')
let titles= document.querySelector(".titles")
let cards= document.querySelector(".cards")
let imagecontainer= document.querySelector(".image-container")


for(let i=0;i<=3;i++){
   let img= document.createElement('img')
   img.className= 'card-2-'+i
   card2.append(img)
 }

function filterImages(filter){
   switch(filter){
    case "all": 
     titles.style.display="none"
            cards.style.display="none"
   putImages(NatureArray.concat(CodingArray)) 
    break;
       case "coding" : 
        titles.style.display="none"
            cards.style.display="none"
       putImages(CodingArray)
       break;
          case "nature":
             titles.style.display="none"
            cards.style.display="none"
          putImages(NatureArray)
            break;
           default : console.log("default");
           titles.style.display="flex"
            cards.style.display="flex"
   }
  }

  function putImages(filteredArray){
  imagecontainer.innerHTML=''
filteredArray.forEach(ele => {
   let element= document.createElement('img')
   element.src= ele
 
   imagecontainer.append(element)
});

  }

function natureImages(){
   for(let i=0; i<4;i++){
    let img= document.querySelector(`.card-2-${i}`)

    img.src= NatureArray[Math.floor(Math.random()*NatureArray.length)]

   }
}


for(let i=0;i<=3;i++){
   let img= document.createElement('img')
   img.className= 'card-3-'+i
   card3.append(img)
   
}


function codeImages(){
   for(let i=0; i<4;i++){
    let img= document.querySelector(`.card-3-${i}`)

    img.src= CodingArray[Math.floor(Math.random()* CodingArray.length)]

   }
}



for(let i=0;i<=3;i++){
   let img= document.createElement('img')
   img.className= 'card-1-'+i
   card1.append(img)
 
}


function allImages(){
   for(let i=0; i<4;i++){
    let img= document.querySelector(`.card-1-${i}`)
    let randomArray = Math.random() < 0.5 ? NatureArray : CodingArray;
    img.src = randomArray[Math.floor(Math.random() * randomArray.length)];
 }
}



window.addEventListener("load",()=>{
   natureImages()
   codeImages()
   allImages()

   filterImages()
})


