const descricao = document.getElementById('descricao')
const valor = document.getElementById('valor')
const data = document.getElementById('data')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = ''
    items.forEach((i, idx) => {
        let item = {
            name: i.item,
            valor: i.preco,
            data: i.dia,
            idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

descricao.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = {
            "item":descricao.value,
            "preco":valor.value,
            "dia":data.value
        }
        componentList_v2(lista.todos)
        descricao.value = ''
        valor.value =''
        data.value = ''
        descricao.focus()
    }
})
valor.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = {
            "item":descricao.value,
            "preco":valor.value,
            "dia":data.value
        }
        componentList_v2(lista.todos)
        descricao.value = ''
        valor.value =''
        data.value = ''
        descricao.focus()
    }
})
data.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = {
            "item":descricao.value,
            "preco":valor.value,
            "dia":data.value
        }
        componentList_v2(lista.todos)
        descricao.value = ''
        valor.value =''
        data.value = ''
        descricao.focus()
    }
})
window.onload = () => componentList_v2(lista.todos)
