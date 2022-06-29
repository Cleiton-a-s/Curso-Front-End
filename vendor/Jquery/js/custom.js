// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

   $('.pedido').click(function(){
      $('.pedido').addClass("animation")
      $('.telephone').show('1000')
   })

   $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    //$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

         event.preventDefault();

         alert('Produto esgotado');

     })

     //Callback
     //$('.featured-item:nth(1)').hide(2000, function(){
      //Este é o callback
      //console.log($(this).find('h4').text() + ' Esgotado')

     //})
     //.show(5000, function(){
      //console.log($(this).find('h4').text() + ' em estoque')
     //})
     
   // Ouvinte de eventos .nav-modal-open
     $('.nav-modal-open').on('click', function(e){
         e.preventDefault()
         let elem = $(this).attr('rel')
         $('.modal-body').html($('#'+elem).html())
         $('.modal-header h5.modal-title').html(this).text()

         let myModal = new bootstrap.Modal($('#modelId'))
         myModal.show()
     })

     const inputName = $('#nome')
     const inputEmail = $('#email')

     function validate(elem){
      if(elem.val() == ""){
         elem.parent().find('.text-muted').show()
         $(elem).addClass('invalid')
         return false
      }
      else{
         elem.parent().find('.text-muted').hide()
         $(elem.val()).removeClass('invalid')
         return true
      }
     }


     $('body').on('submit','.modal-body .form', function(e){
         e.preventDefault()

         validate(inputName)
         validate(inputEmail)
         
      
         if($(inputName).hasClass('invalid') || $(inputEmail).hasClass('invalid')){
            return false
         }
         else{
            console.log('Foi submetido')
            this.submit()
         }
         
     })


      $('body').on('blur','#nome', function(){
      validate($(this))  
      })

      $('body').on('blur','#email', function(){
      validate($(this))    
      })

      $('body').on('blur','#data', function(){
         validate($(this)) 
         $('#data').mask('00/00/0000');
           
      })

      $('body').on('blur','#hora', function(){
         validate($(this))
         $('#hora').mask('00:00');   
      })
      
      $('body').on('blur','#cep', function(){
         validate($(this)) 
         $('#cep').mask('00000-000');  
      })
      
      $('body').on('blur','#celular', function(){
         validate($(this))
         $('#celular').mask('00000-0000');   
      })
      
      $('body').on('blur','#cpf', function(){
         validate($(this))
         $('#cpf').mask('000.000.000-00')   
      })
       


})
