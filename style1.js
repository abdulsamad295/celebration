function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
  
    var splittedText = h1Text.split("")
    var halfValue = splittedText.length/2
  
    var clutter = ""
  
    splittedText.forEach(function (elem,idx) {
        if(idx<halfValue){
             clutter += `<span class="a">${elem}</span>`
     }else{
             clutter += `<span class="b">${elem}</span>`
     }
      
  })
   h1.innerHTML = clutter
  
  }
  
  breakTheText()
  
  gsap.from(".note h1 .a",{
      y:100,
      duration:2,
      stagger:0.15,
      opacity:0,
  })
  gsap.from(".note h1 .b",{
      y:-100,
      duration:2,
      stagger:-0.15,
      opacity:0,
   })

   gsap.to(".note h1",{
    delay:4,
     x:-1000,

   })

gsap.from(".video2",{
   
    duration:2,
    opacity:0,
    delay:4,
    
})