
function toggleMenu(){
     document.getElementById('navMenu').classList.toggle('open'); 
    }

function validateContactForm(e){
  e.preventDefault(); 
  let valid=true;
  const name=document.getElementById('cName'), email=document.getElementById('cEmail'), msg=document.getElementById('cMessage');
  const nE=document.getElementById('nameError'), eE=document.getElementById('emailError'), mE=document.getElementById('msgError');
  nE.style.display=eE.style.display=mE.style.display='none';
  if(name.value.trim().length<2){ 
    nE.textContent='Enter at least 2 characters'; 
    nE.style.display='block'; 
    valid=false; 
}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
     eE.textContent='Enter valid email';
      eE.style.display='block'; 
      valid=false; 
    }
  if(msg.value.trim().length<10){ 
    mE.textContent='Message min 10 chars'; 
    mE.style.display='block'; 
    valid=false; 
}
  if(valid){ alert('Thank you! Message sent to Cafe Dee\'Lish.'); 
    e.target.reset();
 }
  return false;
}
function openLightbox(src){ 
    document.getElementById('lightbox').classList.add('active'); document.getElementById('lightboxImg').src=src; 
}
function closeLightbox(){ 
    document.getElementById('lightbox').classList.remove('active'); 
}