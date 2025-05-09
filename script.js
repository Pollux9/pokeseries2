let menu = false

let sliderCounter = 0;

let favoriteArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let indexFavorite;

let tramaArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let indexTrama;

let favoriteCounter = 0;

function Menu(){
  if(menu){
    

    document.getElementById('menu').style.minHeight = "0px";
    document.getElementById('menu').style.padding = "0px";
    document.getElementsByClassName('menu-option')[0].style.display = "none";
    document.getElementsByClassName('menu-option')[1].style.display = "none";
    document.getElementsByClassName('menu-option')[2].style.display = "none";
    
    
    setTimeout(function(){
      document.getElementById('menu-topline').style.top = "10px";
      document.getElementById('menu-bottomline').style.top = "20px";
    }, 100);
    document.getElementById('menu-topline').style.rotate = "0deg";
    document.getElementById('menu-bottomline').style.rotate = "0deg";
    
    
    menu = false;
    
    
  } else {
    

    document.getElementById('menu').style.minHeight = "100px";
    document.getElementById('menu').style.padding = "8px";
    setTimeout(function(){
      document.getElementsByClassName('menu-option')[0].style.display = "flex";
      document.getElementsByClassName('menu-option')[1].style.display = "flex";
      document.getElementsByClassName('menu-option')[2].style.display = "flex";
    }, 200);   
    
    
    setTimeout(function(){
      document.getElementById('menu-topline').style.rotate = "45deg";
      document.getElementById('menu-bottomline').style.rotate = "-45deg";
    }, 100);
    document.getElementById('menu-topline').style.top = "15px";
    document.getElementById('menu-bottomline').style.top = "15px";
    
    
    menu = true;
    
    
  }
}



function Main(n){

  document.getElementById('menu').style.minHeight = "0px";
  document.getElementById('menu').style.padding = "0px";
  document.getElementsByClassName('menu-option')[0].style.display = "none";
  document.getElementsByClassName('menu-option')[1].style.display = "none";
  document.getElementsByClassName('menu-option')[2].style.display = "none";


  setTimeout(function(){
    document.getElementById('menu-topline').style.top = "10px";
    document.getElementById('menu-bottomline').style.top = "20px";
  }, 100);
  document.getElementById('menu-topline').style.rotate = "0deg";
  document.getElementById('menu-bottomline').style.rotate = "0deg";


  menu = false;

  
  switch(n){
    case 0:
      document.getElementById('subtitle').innerHTML = "home";
      document.getElementsByClassName('main')[0].style.display = "block";
      document.getElementsByClassName('main')[1].style.display = "none";
      document.getElementsByClassName('main')[2].style.display = "none";
      document.getElementById('home-icon').className = "fi fi-sr-house-user";
      document.getElementById('episodes-icon').className = "fi fi-tr-clapperboard-play";
      document.getElementById('pokedex-icon').className = "fi fi-tr-rectangle-list";
      break;
    case 1:
      document.getElementById('subtitle').innerHTML = "episodi";
      document.getElementsByClassName('main')[0].style.display = "none";
      document.getElementsByClassName('main')[1].style.display = "block";
      document.getElementsByClassName('main')[2].style.display = "none";
      document.getElementById('home-icon').className = "fi fi-tr-house-user";
      document.getElementById('episodes-icon').className = "fi fi-sr-clapperboard-play";
      document.getElementById('pokedex-icon').className = "fi fi-tr-rectangle-list";
      sliderCounter = 0;
      document.getElementById('first-slide').style.marginLeft = sliderCounter + "%";
      break;
    case 2:
      document.getElementById('subtitle').innerHTML = "pokédex";
      document.getElementsByClassName('main')[0].style.display = "none";
      document.getElementsByClassName('main')[1].style.display = "none";
      document.getElementsByClassName('main')[2].style.display = "flex";
      document.getElementById('home-icon').className = "fi fi-tr-house-user";
      document.getElementById('episodes-icon').className = "fi fi-tr-clapperboard-play";
      document.getElementById('pokedex-icon').className = "fi fi-sr-rectangle-list";
      sliderCounter = 0;
      document.getElementById('first-slide').style.marginLeft = sliderCounter + "%";
      break;
  }

  
}



function SlideLeft(){
  if(sliderCounter < 0){
    sliderCounter += 100;
    document.getElementById('first-slide').style.marginLeft = sliderCounter + "%";
  }
}

function SlideRight(){
  if(sliderCounter > -10600){
    sliderCounter -= 100;
    document.getElementById('first-slide').style.marginLeft = sliderCounter + "%";
  }
}




function Favorite(indexFavorite){
  if(favoriteArray[indexFavorite]){
    document.getElementsByClassName('fi fi-sr-circle-star')[indexFavorite].style.color = "whitesmoke";
    favoriteArray[indexFavorite] = false;
    favoriteCounter--;
    document.getElementById('counter-episodi').innerHTML = favoriteCounter;
  } else {
    document.getElementsByClassName('fi fi-sr-circle-star')[indexFavorite].style.color = "#21c063";
    favoriteArray[indexFavorite] = true;
    favoriteCounter++;
    document.getElementById('counter-episodi').innerHTML = favoriteCounter;
  }
}


function Trama(indexTrama){
  if(tramaArray[indexTrama]){
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.top = "214px";
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.left = "0px";
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.zIndex = "10";
    document.getElementsByClassName('episodio-trama')[indexTrama].style.height = "0px";
    document.getElementsByClassName('episodio-trama')[indexTrama].style.padding = "16px";
    document.getElementsByClassName('episodio-trama')[indexTrama].style.color = "#1a1a1a";
     tramaArray[indexTrama] = false;
  } else {
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.top = "0px";
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.left = "0px";
    document.getElementsByClassName('episodio-trama-container')[indexTrama].style.zIndex = "80";
    document.getElementsByClassName('episodio-trama')[indexTrama].style.height = "214px";
    document.getElementsByClassName('episodio-trama')[indexTrama].style.padding = "16px";
    setTimeout(function(){
      document.getElementsByClassName('episodio-trama')[indexTrama].style.color = "whitesmoke";
    }, 200);
    tramaArray[indexTrama] = true;
  }
}