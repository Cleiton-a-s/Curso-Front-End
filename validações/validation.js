

function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault()
        event.stopPropagation()

        if (this.value == ""){
            this.classList.add('erro')
            return false
        }
        else {
            this.classList.remove('erro')
        }
    })
}

function validaNumerico(elemento) {
    elemento.addEventListener('focusout', function(event){
        event.preventDefault()
        
        
        if(!isNaN(this.value)){
            this.classList.remove('erro')
        }
        else{
            this.classList.add('erro')
        }
    })
}

function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event){
    event.preventDefault()

    const emailValido = /^[a-z0-9.-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    if(this.value.match(emailValido)){
        this.classList.remove('erro')
        this.parentNode.classList.remove('erro')
    }
    else{
        this.classList.add('erro')
        this.parentNode.classList.add('erro')
        return false
    }

})

}

function validaTel(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault()

        const telValido = /^\s?[\d]{11,13}$/
        if(this.value.match(telValido) || this.value == ""){
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
        }
        else{
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
            return false
        }
    })
}

function validaCEP(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault()

        const CEPvalido = /^[\d]{5}-?[\d]{3}$/

        if(this.value.match(CEPvalido)){
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
        }
        else{
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
        }
    })
}

function validaUF(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault()

        const UFvalido = /^[a-z]{2}$/i

        if(this.value.match(UFvalido)){
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
        }
        else{
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
        }
    })
}


/* Preenchimento dos campos Obrigatorio*/
let camposObrigatorios = document.querySelectorAll('input.obrigatorio')

for(let campo of camposObrigatorios){
    validaCampo(campo)
}

/* Campos numéricos */
let camposNumericos = document.querySelectorAll('input.numericos')
for(let campo of camposNumericos){
    validaNumerico(campo)
}

/* Campo E-mail */
let campoEmail = document.querySelector('input.email')

if(campoEmail){
    validaEmail(campoEmail)
}

/* Campo Telefone */
let campoTel = document.querySelector('input.telefone')

if(campoTel){
    validaTel(campoTel)
}
/* Campo CEP */
let campoCEP = document.querySelector('input.cep')
if(campoCEP)[
    validaCEP(campoCEP)
]

/* Campo UF */
let campoUF = document.querySelector('input.uf')

if(campoUF){
    validaUF(campoUF)
}





