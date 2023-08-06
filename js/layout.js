const cardItems = [
    {
        type:'sale',
        imgSrc:'taguig1/Property 1_LivingRoom',
        property:'Taguig Property 1',
        address:'Bagumbayan Taguig City Metro Manila',
        price:'99,999',
        beds:2,
        bathroom:2,
        to:'overview1.html',
        imgs:[
            {img:'img/taguig1/Property 1_LivingRoom',title:'Living Room'},
            {img:'img/taguig1/Property 1_Backyard 2',title:'Backyard 1'},
            {img:'img/taguig1/Property 1_Front',title:'Front'},
            {img:'img/taguig1/Property 1_KitchenArea',title:'Kitchen Area'},
            {img:'img/taguig1/Property1_Backyard 1',title:'Backyard 2'}
        ]
    },
    {
        type:'sale',
        imgSrc:'taguig2/Property2_LivingRoom',
        property:'Taguig Property 2',
        address:'Bagumbayan Taguig City Metro Manila',
        price:'99,999',
        beds:2,
        bathroom:2,
        to:'overview2.html',
        imgs:[
            {img:'img/taguig2/Property2_Alley',title:'Alley'},
            {img:'img/taguig2/Property2_Downstairs',title:'Downstairs'},
            {img:'img/taguig2/Property2_Front',title:'Front'},
            {img:'img/taguig2/Property2_Frontyard',title:'Front Yard'},
            {img:'img/taguig2/Property2_Frontyard2',title:'Front Yard'},
            {img:'img/taguig2/Property2_Garage',title:'Garage'},
            {img:'img/taguig2/Property2_KitchenArea',title:'Kitchen Area'},
            {img:'img/taguig2/Property2_LivingRoom',title:'Living Room'},
            {img:'img/taguig2/Property2_LivingRoom2',title:'Living Room 2'},
            {img:'img/taguig2/Property2_LivingRoom3',title:'Living Room 3'},
            {img:'img/taguig2/Property2_Room1',title:'Room 1'},
            {img:'img/taguig2/Property2_Room2',title:'Room 2'},
            {img:'img/taguig2/Property2_Room3',title:'Room 3'},
            {img:'img/taguig2/Property2_Room4',title:'Room 4'},
            {img:'img/taguig2/Property2_Room5',title:'Room 5'},
            {img:'img/taguig2/Property2_Stairs',title:'Stairs'},
            {img:'img/taguig2/Property3_Room3.1',title:'Room 3'},
        ]
    },
    {
        type:'sale',
        imgSrc:'katipunan/Property3_Kitchen',
        property:'Katipunan property',
        address:'Katipunan Quezon City Metro Manila',
        price:'99,999',
        beds:2,
        bathroom:2,
        to:'overview3.html',
        imgs:[
            {img:'img/katipunan/Property3_ComfortRoom1',title:'Comfort Room'},
            {img:'img/katipunan/Property3_Garage',title:'Garage'},
            {img:'img/katipunan/Property3_Kitchen',title:'Kitchen'},
            {img:'img/katipunan/Property3_Kitchen2',title:'Kitchen 2'},
            {img:'img/katipunan/Property3_LaundryArea',title:'Laundry Area'},
            {img:'img/katipunan/Property3_MasterBedroom',title:'Master Bedroom'},
            {img:'img/katipunan/Property3_MasterBedroom2',title:'Master Bedroom 2'},
            {img:'img/katipunan/Property3_Room1',title:'Room 1'},
            {img:'img/katipunan/Property3_Room2',title:'Room 2'},
            {img:'img/katipunan/Property3_Room3',title:'Room 3'},
            {img:'img/katipunan/Property3_Room3.1',title:'Room 3'},
            {img:'img/katipunan/Property3_Upstairs',title:'Upstairs'},
        ]
    },
]
const layout = {
    modalImgs(data){
        let result = '';
        data.forEach((el,index)=>{
            result+=`<div class="item">
                    <img src="${el.img}.jpg">
                    <div class="img-desc">${el.title}</div>
                </div>`
        })
        return result
    },
    modal(content,size){ 
        $('body').append(`
            <div class="my-modal">
                <div class="modal-wrapper ${size}">
                    <div class="header tag-${content.type}">
                        <div class="title">
                            <h2>${content.property}</h2>
                            <span class="address">${content.address}</span>
                        </div>
                        <div>
                            <h3>₱ ${content.price}</h3>
                        </div>
                    </div>
                    <div class="content">
                        <div class="slide">
                            <div class="owl-carousel modal-slide owl-theme">
                                ${this.modalImgs(content.imgs)}
                            </div>
                        </div>
                        <div class="details">
                            <div class="top">
                                <div class="overview">
                                    <h4>Description</h4>
                                    <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</span>
                                </div>
                                <div class="small-details">
                                    <div class="item">
                                        <div class="icon-wrapper">
                                            <i class="fa-solid fa-ruler"></i>
                                        </div>
                                        <span>140 sqm</span>
                                    </div>
                                    <div class="item">
                                        <div class="icon-wrapper">
                                            <i class="fa-solid fa-bath"></i>
                                        </div>
                                        <span>${content.bathroom} bathrooms</span>
                                    </div>
                                    <div class="item">
                                        <div class="icon-wrapper">
                                            <i class="fa-solid fa-bed"></i>
                                        </div>
                                        <span>${content.beds} beds</span>
                                    </div>
                                </div>
                            </div>
                            <div class="location">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.5956045067!2d121.04647137807319!3d14.476137888108129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfa4afd8f41b%3A0xd48e183dc204b5cc!2sBagumbayan%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1690025335897!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <button class="btn close-modal">CLOSE</button>
                    </div>
                </div>
            </div>
        `)
        $('.modal-slide').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    },
    createCards(){
        cardItems.forEach((data,index)=>{
            $('.products-cotainer').append(
                `<a href="${data.to}" class="card for-${data.type}" data-aos="flip-left" data-index="${index}">
                    <div class="img-container">
                        <img src="img/${data.imgSrc}.jpg">
                    </div>
                    <div class="footer">
                        <div class="foot-content">
                            <div class="title">
                                <h4>${data.property}</h4>
                                <div>${data.address}</div>
                            </div>
                            <div class="price">₱ ${data.price}</div>
                        </div>
                    </div>
                </a>
                `
            )
        })
    },
    sideNav(){
        $('body').append(`
            <div class="mobile-nav">
                <div class="nav-bar">
                    <ul class="side-nav">
                        <li>
                            <a href="#main-view" data-section="main-view">Home</a>
                        </li>
                        <li>
                            <a href="#all-products" data-section="all-products">Products</a>
                        </li>
                        <li>
                            <a href="#about-us" data-section="about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#faqs" data-section="faqs">FAQs</a>
                        </li>
                        <li>
                            <a href="#contact" data-section="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        `)
    },
    sideNav2(){
        $('body').append(`
            <div class="mobile-nav">
                <div class="nav-bar">
                    <ul class="side-nav">
                        <li>
                            <a href="index.html" data-section="main-view">Home</a>
                        </li>
                        <li>
                            <a href="#about-us" data-section="about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#faqs" data-section="faqs">FAQs</a>
                        </li>
                        <li>
                            <a href="#contact" data-section="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        `)
    }
}
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}
$(document).ready(function(){
    $('.main-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:2
            },
            1269:{
                items:1
            }
        }
    })
    $(".vid-slide").owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
          560: {
            items: 2
          },
          992: {
            items: 4
          }
        }
    });
      
    
    $('.featured-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $('body, html').scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    })
    
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        $('.mobile-nav').slideUp()
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    
    $('.toggle-buttons button').click(function(){
        let val = $(this).data('val')
        let el = $('.products-cotainer')
    
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    
        if(val == 'rent'){
            el.removeClass('sale')
            el.addClass(`${val}`)
        }else if(val == 'sale'){
            el.removeClass('rent')
            el.addClass(`${val}`)
        }else{
            el.removeClass('rent')
            el.removeClass('sale')
        }
    })

    $('.card').click(function(){
        let val = $(this).data('index')
        let content = cardItems[val]
        let size = 'md'
        layout.modal(content,size)
    })

    $('.nav-toggle.one').click(function(){
        layout.sideNav()
    })

    $('.nav-toggle.two').click(function(){
        layout.sideNav2()
    })

    $(document).on('click','.side-nav a',function(){
        $('.mobile-nav').remove()
    })

    $(document).on('click','.mobile-nav',function(){
        $('.mobile-nav').remove()
    })

    $(document).on('click','.close-modal',function(){
        $('.my-modal').remove()
    })
    $(window).on('scroll',function(){
        let el = $('header:not(.with-bg)')
        if(window.scrollY > 10){
            el.css('background',' rgb(20, 46, 43)')
        }else{
            el.css('background','')
        }
    })
    $('img.top-logo').on('click',function(){
        window.location.href = 'index.html'
    })
    layout.createCards()
    AOS.init();
})
