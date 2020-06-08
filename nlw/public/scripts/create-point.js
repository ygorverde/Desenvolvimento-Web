
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf")
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").
        then((res)=>{return res.json()})
        .then(states => {
            
            for(let state of states){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

    })
}

populateUFs();

function getCities(event){
    const citySelect = document.querySelector("select[name=city");
    const stateInput = document.querySelector("input[name=state");

    console.log(event.target.value)

    let ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url).
    then((res)=>{return res.json()})
    .then(cities => {
        
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
})
}


document.querySelector("select[name=uf")
.addEventListener("change", getCities)


// Ítens de coleta
// Pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (let item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    // adicionar ou remover uma classe com js toggle, add ou remove.
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log("itemID: " + itemId)
    // verificar se existem itens selecionados, se sim, quais itens e pegar os itens selecionados.

    const alreadySelected = selectedItems.findIndex( function(item){
        const itemFound = item == itemId // Será true ou false
        return itemFound // Retorna verdadeiro ou false
    })

    // se já estiver selecionado, tirar da seleção (let selectedItems[])
    if ( alreadySelected >= 0){
        // tirar da seleção
        const filteredItems = selectedItems.filter(function(item){
            const itemIsDifferent = item != itemId //false
             return itemIsDifferent
        })
        selectedItems = filteredItems
    }else{
        // se não estiver selecionado, adicionar a seleção.
        // adicionar a seleção
        selectedItems.push(itemId)
    }
    //console.log(selectedItems)
    // atualizar o campo escondido com os dados atualizados.
    collectedItems.value = selectedItems;

}