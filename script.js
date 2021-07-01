        let nav = document.querySelector('#pnavbar')
        let btnNav = document.querySelector('#p-nav-btn')
        let btnCta = document.querySelector('#btn-cta')
        

        document.addEventListener('scroll', function(){
            if(window.scrollY >500){
                nav.classList.add('p-nav-scrolled')
            }else{
                nav.classList.remove('p-nav-scrolled')
            }
        })

        btnNav.addEventListener('click', function(){
          btnNav.classList.toggle('open')
        })

        btnCta.addEventListener('mouseover', function(){
       btnCta.classList.toggle('fa-tshirt')
       
       btnCta.classList.toggle('fa-arrow-right')
      }) 