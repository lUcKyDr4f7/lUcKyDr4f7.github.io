// Animação de Botão para Rolagem da Página
const botaol = document.querySelector('#lucas')
const botaos = document.querySelector('#btn-sobre')
const botaoNs = document.querySelector('#itemN-1')
const botaoMs = document.querySelector('#itemM-1')
const botaoNp = document.querySelector('#itemN-2')
const botaoMp = document.querySelector('#itemM-2')
const botaoNc = document.querySelector('#itemN-3')
const botaoMc = document.querySelector('#itemM-3')
// Botão Sobre
botaos.addEventListener('click', () => {
   window.scroll({top:1250, behavior: "smooth"});
});
botaoNs.addEventListener('click', () => {
   window.scroll({top:1250, behavior: "smooth"});
});
botaoMs.addEventListener('click', () => {
   window.scroll({top:1250, behavior: "smooth"});
});
// Botão Portifólio
botaoNp.addEventListener('click', () => {
   window.scroll({top:2450, behavior: "smooth"});
});
botaoMp.addEventListener('click', () => {
   window.scroll({top:2450, behavior: "smooth"});
});
// Botão Contatos
botaoNc.addEventListener('click', () => {
   window.scroll({top:1250, behavior: "smooth"});
});
botaoMc.addEventListener('click', () => {
   window.scroll({top:1250, behavior: "smooth"});
});
// Botão Início da Página
botaol.addEventListener('click', () => {
   window.scroll({top: 0, behavior: "smooth"});
});



// Seleção e Filtro dos Portifólios
document.addEventListener("DOMContentLoaded", () =>{
   const portifolioTabs = document.querySelector(".portifolio-tabs");
   const portifolioTabBtns = portifolioTabs.querySelectorAll(".tab-btn")
   const cardsWithModals = document.querySelectorAll(".portifolio-container .card-with-modal");

   portifolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardsWithModals.forEach((cardWithModal) =>{
            if(filter === "all" || cardWithModal.classList.contains(filter)){
               cardWithModal.classList.remove("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
            else{
               cardWithModal.classList.add("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
      });
      portifolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
      tabBtn.classList.add("active");
     });
   });
});

const portifolioCardsWithModals = document.querySelectorAll(".portifolio-container .card-with-modal");

portifolioCardsWithModals.forEach((portifolioCardWithModal) => {
   const portifolioCard = portifolioCardWithModal.querySelector(".portifolio-card");
   const portifolioBackdrop = portifolioCardWithModal.querySelector(".portifolio-modal-backdrop");
   const portifolioModal = portifolioCardWithModal.querySelector(".portifolio-modal");
   const modalCloseBtn = portifolioCardWithModal.querySelector(".modal-close-btn");
   
   portifolioCard.addEventListener("click", ()  =>  {
      portifolioBackdrop.style.display = "flex";
      setTimeout(() => {
         portifolioBackdrop.classList.add("active");
      }, 300);
      setTimeout(() => {
         portifolioModal.classList.add("active");
      }, 300);
   });
   modalCloseBtn.addEventListener("click", ()  => {
      setTimeout(() => {
         portifolioBackdrop.style.display = "none";
      }, 500);
      setTimeout(() => {
         portifolioBackdrop.classList.add("active");
         portifolioModal.classList.add("active");
      }, 100);
   });
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
(function() {
   // https://dashboard.emailjs.com/admin/account
   emailjs.init({
     publicKey: "kTsQvGyhzTNPuxDm8",
   });
})();

SueContactForm = document.getElementById("sue-contact-form");
SueContactFormAlert = document.querySelector(".contact-form-alert");

SueContactForm.addEventListener('submit', function(event) {
   event.preventDefault();
   // these IDs from the previous steps
   emailjs.sendForm('service_pxi0vqq', 'template_ovdkcta', '#sue-contact-form')
       .then(() => {
         //   console.log('SUCCESS!');
         SueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
         SueContactForm.reset();

         setTimeout(() => {
         SueContactFormAlert.innerHTML = "";
         }, 5000);
       }, (error) => {
         //   console.log('FAILED...', error);
         SueContactFormAlert.innerHTML = "<span>Message not send!</span> <i class='ri-error-warning-fill'></i>";
         SueContactFormAlert.title = error;
       });
});

