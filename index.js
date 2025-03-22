 function filterImages(filter){
    console.log(filter);
 }

let NatureArray=["assets/nature/natureimg1.jpg","assets/nature/natureimg2.jpg", "assets/nature/natureimg3.jpg","assets/nature/natureimg4.jpg" , "assets/nature/natureimg5.jpg"]

let card2= document.querySelector('.card-2')
for(let i=0;i<=3;i++){
   let img= document.createElement('img')
   img.className= 'card-2-'+i
   card2.append(img)
   console.log(img);
}
console.log(card2.childNodes);

function natureImages(){
   for(let i=0; i<NatureArray.length;i++){
    let img= document.querySelector(`.card-2-${i}`)

    img.src= NatureArray[Math.floor(Math.random()*NatureArray.length)]
    console.log(img);
   }
}

natureImages()
