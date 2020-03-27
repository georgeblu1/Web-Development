window.addEventListener('load',() => {
  const sound = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colours = [
    "#60d394",
    "#ec84af",
    "#a62bb1",
    "#e75f5f",
    "#2734e9",
    "#ecd02d"

  ];

  pads.forEach((pad,index) => {
    pad.addEventListener('click',function(){
      sound[index].currentTime = 0;
      sound[index].play();
      createBubbles(index);


    })
  });

  //create a function that makes bubble
  const createBubbles = (index) =>{
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colours[index]
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this)
      
    });
  }

});

