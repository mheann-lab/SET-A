*{ 
  
    padding: 0; 
    margin: 0;
} 

.landing-page{
    
    height:100vh;
    background:url(../img/motor1.jpeg);
    text-align: center;
    background-size: cover;
} 

.ninja{ 
    
    position: relative; 
    top: 10rem; 
    left: 15rem; 
    width: 33rem;
}

button{ 
    
    background:linear-gradient(90deg, #03a9f4,#f441a5,#ffeb3b, #03a9f4); 
    width: 8rem; 
    height: 3rem; 
    position: relative; 
    top: 15rem; 
    right: 7rem; 
    background-size: 400%; 
    border-radius: 30px; 
}

a{ 
    
    text-decoration: none; 
    font-size: 1.5rem; 
    color: honeydew;
}

a:hover{ 
    
    animation: animate 8s linear infinite;
}

@keyframes animate{ 
    
    0% 
    { 
        
        background-position: 0%; 
    }
     
      100% 
    { 
        
        background-position: 400%; 
    }
}

