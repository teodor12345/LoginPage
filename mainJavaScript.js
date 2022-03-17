const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((leter,idx)=>`<span style="transition-delay:${idx * 50}ms">${leter}</span>`)
    .join('')
})