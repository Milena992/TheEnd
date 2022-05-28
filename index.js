let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let kupci = [
    {
        kupac: 'Ана Перић',
        napomena: 'Упаковати као рођендански поклон',
        dinosaurus: 'Efrassia' ,
        cena: 199,
    },
    {
        kupac: 'Марко Краљевић' ,
        napomena: '',
        dinosaurus: 'Iguanodon' ,
        cena: 374,
        },

]


const kupac = document.querySelector('#kupac')
const dino = document.querySelector('#dino')
const napomena = document.querySelector('#napomena')
const form = document.querySelector('form')
const buttonSviKupci = document.querySelector('#sviKupci')
const selectElement = document.querySelector('#dino')
const izabraniDino = document.getElementById('dino')

let noviKupac = {}

form.addEventListener('submit', e =>{
    e.preventDefault()

    if(kupac.value.trim() === '')
        alert('Morate uneti Vase ime!')
    
    if(kupac.value.length <4)
        alert('Vase ime mora imati vise od 4 slova!')

    // if(napomena.value === ''){
    //     noviKupac.napomena = '/'
    // }

    if(izabraniDino.value === izabraniDino.value[0])
        alert('Morate izabrati dinosaurusa!')

    if(kupac.value.charAt(0) != kupac.value.charAt(0).toUpperCase())
        alert('Prvo slovo Vaseg imena mora biti veliko!')

    noviKupac = {
        kupac: kupac.value.trim(),
        napomena: napomena.value,
        dinosaurus: dino.value,
        cena:"" ,
    }
    
    if(kupac.value.length >=5 && izabraniDino.value != izabraniDino.value[0] && kupac.value.charAt(0) != kupac.value.charAt(0).toUpperCase() )
        kupci.push(noviKupac)
        alert ('Uspesno ste kupili Dino jaje!')


})



const main = document.querySelector('main')

const renderBase = (main) => {
    const divKupci = document.querySelector('.kupci')
    divKupci.classList.add('row')

    const pIme = document.createElement('p')
    pIme.textContent = 'Купац'

    const pNapomena = document.createElement('p')
    pNapomena.textContent = 'Напомена'

    const pDino = document.createElement('p')
    pDino.textContent = 'Диносаурус'

    const pCena = document.createElement('p')
    pCena.textContent = 'Цена'

    const buttonBrisi = document.createElement('button')
    buttonBrisi.textContent = 'Обриши'

    divKupci.append(
        pIme,
        pNapomena,
        pDino,
        pCena,
        buttonBrisi
    )

    main.append(divKupci)
}

buttonSviKupci.addEventListener('click', e=>{

for(let i=0; i < kupci.length; i++) {

            const divKupci = document.querySelector('.kupci')
            divKupci.classList.add('row')

            const pIme = document.createElement('p')
            pIme.textContent = 'Купац:' + kupci[i].kupac

            const pNapomena = document.createElement('p')
            pNapomena.textContent = "Напомена:" + kupci[i].napomena

            const pDino = document.createElement('p')
            pDino.textContent = "Диносаурус:" + kupci[i].dinosaurus

            const pCena = document.createElement('p')
            pCena.textContent ="Цена:" + kupci[i].cena

            const buttonBrisi = document.createElement('button')
            buttonBrisi.textContent = 'Обриши'
            buttonBrisi.id = 'obrisiKupca'

         

    divKupci.append(
        pIme,
        pNapomena,
        pDino,
        pCena,
        buttonBrisi
    )

    main.append(divKupci)
    }
    
})

const btnBrisiKupca = document.querySelector('#obrisiKupca')

btnBrisiKupca.addEventListener('click', e =>{
    let nizDivova = []
    for(let i = 0; i < nizDivova.length; i++){
        if(nizDivova[i].classList.contains('marked')){
            nizKorisnika.splice(i + 1, 1)
            nizDivova.splice(i, 1)
            i--
        }
    }
})