document.addEventListener('DOMContentLoaded', _ => {
    let obj = localStorage.getItem('obj') 
    obj = obj || '{}'
    obj = JSON.parse(obj)
    const oi = document.querySelectorAll('ul > li')
    oi.forEach(o => {
        const ol = document.createElement('ol')
        o.insertAdjacentElement('beforeend', ol)
        const v = o.querySelector('.item').textContent
        obj[v]?.forEach(t => {
            ol.insertAdjacentHTML('beforeend', comment(t))
        })
    })
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
        const prod = item.value
        const com = text.value
        if (prod == '' || com == '') return
        const id = (new Date()).toString()
        const oc = {id, txt: com}
        obj[prod] = obj[prod] ?? []
        obj[prod].push(oc)
        localStorage.setItem('obj', JSON.stringify(obj))
        e.target.reset()
        oi.forEach(o => {
            const v = o.querySelector('span').textContent
            if (v != prod) return
            o.querySelector('ol').insertAdjacentHTML('beforeend', comment(oc))
            o.classList.add('on')
        })

    })
    const ou = document.querySelector('ul')
    ou.addEventListener('click', e => {
        const o = e.target
        if (!o.classList.contains('item')) return
        o.closest('li').classList.toggle('on')
    })
    ou.addEventListener('click', e => {
        const o = e.target
        if (o.tagName != 'BUTTON') return
        const ol = o.closest('[data-id]')
        if (!ol) return
        const id = ol.dataset.id
        const v = ol.closest('ol').closest('li').querySelector('span').textContent
        obj[v] = obj[v].filter(o => o.id != id)
        localStorage.setItem('obj', JSON.stringify(obj))
        ol.remove()
    })
    function comment(o) {
        return `<li data-id='${o.id}'><span class="span">${o.txt}</span> <button>Удалить</button></li>`
    }
})


