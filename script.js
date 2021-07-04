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

      let categoriesWrapper = document.querySelector('#categories-wrapper')

        let categories = [
          { title:'Scarpe' , img:'https://picsum.photos/id/1/300/250'},
          {title:'Borse' , img: 'https://picsum.photos/id/1/300/250'},
          {title:'T-Shirt' , img:'https://picsum.photos/id/1/300/250'},
           {title:'Jeans' , img:'https://picsum.photos/id/1/300/250'},
           {title:'Vestiti' , img:'https://picsum.photos/id/1/300/250'},
            {title:'Camicie' , img:'https://picsum.photos/id/1/300/250'},
        ];
       
        categories.forEach(category =>{
         let card = document.createElement('div')
          card.classList.add('col-12','col-md-6','col-lg-4', 'my-5','mt-2')
          card.innerHTML = `
                  <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
                 class="card p-card" style="width:18rem;">
                  
                        <div class="card-body text-center">
                          <h5 class="card-title h4 fs-3 fw-bold">${category.title}</h5>
                          <a href="#" class="btn btn-primary mt-3 fs-4 btn-card">Scopri di più</a>
                        </div>
                  `
                  categoriesWrapper.appendChild(card)
        })