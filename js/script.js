

const filterButtons=document.querySelector("#filter-btns").children;
const items= document.querySelector(".portfolio-gallery").children;



for(let i=0; i< filterButtons.length; i++)
{
    filterButtons[i].addEventListener("click", function(){
        for( let j=0; j<filterButtons.length; j++)
            {
                filterButtons[j].classList.remove("active")   
            }
            this.classList.add("active");
            const target=(this.getAttribute("data-target"))
        
            for(let k=0; k<items.length; k++)
                {
                    items[k].style.display = "none";
                    if(target==items[k].getAttribute("data-id"))
                    {
                        items[k].style.display = "block";
                    }
                    if(target=="all")
                    {
                        items[k].style.display = "block";
                    }
                }

    })
}



const closeLightbox=document.querySelector(".close");
const Lightbox=document.querySelector(".lightbox");
const LightboxImage=Lightbox.querySelector("img");
const LightboxVideo=Lightbox.querySelector("video");


closeLightbox.addEventListener("click", function(){
    Lightbox.classList.remove("show");
    Lightbox.classList.add("hide");
  })


const gallery =document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        Lightbox.classList.remove("hide");
        Lightbox.classList.add("show");
        LightboxImage.src=element.querySelector("img").getAttribute("src")
        LightboxVideo.src=element.querySelector("video").getAttribute("src")
    })
})



