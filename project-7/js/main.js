
    
        let item = document.querySelectorAll('.nav__item');
        for (let i = 0; i < item.length; i++) {
            item[i].onclick = function () {
                let j = 0;
                while (j < item.length) {
                    item[j].className = 'nav__item';
                    j++;

                }
                item[i].className = 'nav__item active';
            };
        }


  
        let menuToggle = document.querySelector('.toogle');
        let navmenu = document.querySelector('.nav__menu')
        menuToggle.onclick=function(){
            menuToggle.classList.toggle('active');
            navmenu.classList.toggle('active');
        } 

        // item2.addEventListener("click",()=>{
        //     console.log("batuhan")
        // })



        // var item3 = document.querySelectorAll('nav__item');
        // item3.forEach(element => {
        //     element.addEventListener('click',(e) => {
                
        //     })
        // })