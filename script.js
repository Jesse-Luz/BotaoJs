// Background Color--

let bloco1 = document.querySelector("#a1")
let btnLight = document.querySelector("#btLight")
let btnGray =document.querySelector("#btGray")
let btnDark = document.querySelector("#btDark")
let btnLD = document.querySelector("#btLD")
let btnRed = document.querySelector("#btRed")
let btnOrange = document.querySelector("#btOrange")
let btnYellow = document.querySelector("#btYellow")
let btnRY = document.querySelector("#btRY")
let btnGreen = document.querySelector("#btGreen")
let btnAquaGreen = document.querySelector("#btAquaGreen")
let btnCyan = document.querySelector("#btCyan")
let btnGC = document.querySelector("#btGC")
let btnTurquoise = document.querySelector("#btTurquoise")
let btnBlue = document.querySelector("#btBlue")
let btnRoxao = document.querySelector("#btRoxao")
let btnTR = document.querySelector("#btTR")
let btnPurple = document.querySelector("#btPurple")
let btnPink = document.querySelector("#btPink")
let btnMagenta = document.querySelector("#btMagenta")
let btnPM = document.querySelector("#btPM")

btnLight.addEventListener('click', light)
btnGray.addEventListener('click', gray)
btnDark.addEventListener('click', dark)
btnLD.addEventListener('click', ld)
btnRed.addEventListener('click', red)
btnOrange.addEventListener('click', orange)
btnYellow.addEventListener('click', yellow)
btnRY.addEventListener('click', ry)
btnGreen.addEventListener('click', green)
btnAquaGreen.addEventListener('click', aquagreen)
btnCyan.addEventListener('click', cyan)
btnGC.addEventListener('click', gc)
btnTurquoise.addEventListener('click', turquoise)
btnBlue.addEventListener('click', blue)
btnRoxao.addEventListener('click', roxao)
btnTR.addEventListener('click', tr)
btnPurple.addEventListener('click', purple)
btnPink.addEventListener('click', pink)
btnMagenta.addEventListener('click', magenta)
btnPM.addEventListener('click', pm)


function light () {
    console.log("modo claro")
    bloco1.classList.add('light')
    bloco1.classList.remove('gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function gray () {
    console.log("background gray")
    bloco1.classList.add('gray')
    bloco1.classList.remove('light','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function dark () {
    console.log("Modo escuro")
    bloco1.classList.add('dark')
    bloco1.classList.remove('light','gray','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function ld () {
    console.log("Linear light-gray-dark")
    bloco1.classList.add('l-d')
    bloco1.classList.remove('light','gray','dark','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function red () {
    console.log("background red")
    bloco1.classList.add('red')
    bloco1.classList.remove('light','gray','dark','l-d','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function orange() {
    console.log("background orange")
    bloco1.classList.add('orange')
    bloco1.classList.remove('light','gray','dark','l-d','red','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function yellow() {
    console.log("background yellow")
    bloco1.classList.add('yellow')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function ry() {
    console.log("background gradient red-orange-yellow")
    bloco1.classList.add('r-y')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function green() {
    console.log("background green")
    bloco1.classList.add('green')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','ry','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function aquagreen() {
    console.log("background aquagreen")
    bloco1.classList.add('aquagreen')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','ry','green','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function cyan() {
    console.log("background cyan")
    bloco1.classList.add('cyan')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','ry','green','aquagreen','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function gc() {
    console.log("Background gradient green-aquagreen-cyan")
    bloco1.classList.add('g-c')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','ry','green','aquagreen','cyan','turquoise','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function turquoise() {
    console.log("Background turquoise")
    bloco1.classList.add('turquoise')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','ry','green','aquagreen','cyan','g-c','blue','roxao','t-r','purple','pink','magenta','p-m')
}

function blue() {
    console.log("Background blue")
    bloco1.classList.add('blue')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','roxao','t-r','purple','pink','magenta','p-m')
}

function roxao() {
    console.log("Background roxao")
    bloco1.classList.add('roxao')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','t-r','purple','pink','magenta','p-m')
}

function tr() {
    console.log("Background gradient turquoise-blue-roxao")
    bloco1.classList.add('t-r')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','purple','pink','magenta','p-m')
}

function purple() {
    console.log("Modo roxo")
    bloco1.classList.add('purple')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','pink','magenta','p-m')
}

function pink() {
    console.log("Background pink")
    bloco1.classList.add('pink')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','magenta','p-m')
}

function magenta() {
    console.log("Background magenta")
    bloco1.classList.add('magenta')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','p-m')
}

function pm() {
    console.log("Background p-m")
    bloco1.classList.add('p-m')
    bloco1.classList.remove('light','gray','dark','l-d','red','orange','yellow','r-y','green','aquagreen','cyan','g-c','turquoise','blue','roxao','t-r','purple','pink','magenta')
}

// Background Color--

// Calculator-
    
    let calc = document.querySelector('#calcJs')
    let calcImc = document.querySelector('#calcImcJs')
    let btnCalc = document.querySelector('#btCalc')
    let btnCalcImc = document.querySelector('#btCalcImc')
    let voltar = document.querySelector('#calcBack')
    let voltarImc = document.querySelector('#calcBackImc')
    let escolha = document.querySelector('#escolha1')

    btnCalc.addEventListener('click', abrirCalc)
    btnCalcImc.addEventListener('click', abrirCalcImc)
    voltar.addEventListener('click', voltei)
    voltarImc.addEventListener('click', volteiImc)

     function abrirCalc() {
         console.log('Calculadora aberta')
         calc.classList.add('abrirCalc')
         calc.classList.remove('fecharCalc')
         escolha.classList.add('fecharCalc')
     }

    function abrirCalcImc() {
        console.log('Calculadora IMC aberta')
        calcImc.classList.add('abrirCalc')
        calcImc.classList.remove('fecharCalc')
        escolha.classList.add('fecharCalc')
    }

    function voltei() {
        console.log('voltei')
        calc.classList.add('fecharCalc')
        escolha.classList.add('abrirCalc')
        escolha.classList.remove('fecharCalc')
    }

    function volteiImc() {
        console.log('voltei do Imc')
        calcImc.classList.add('fecharCalc')
        escolha.classList.add('abrirCalc')
        escolha.classList.remove('fecharCalc')
    }

// Calculator--




