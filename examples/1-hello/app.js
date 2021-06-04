const result = document.querySelector('.result')

const fetchData = async () => {
    const {data} = await axios.get('/1-hello')
    result.textContent = data
}

fetchData()


// const products = data.map( product => {
//     const {image:{url}, name, price} = product
//     return `<article class="product">
//                 <img src="${url}" alt="${name}"/>
//                 <div class="info">
//                     <h5>${name}</h5>
//                     <h5 class="price">${price}</h5>
//                 </div>
//             </article>`
// }).join(' ')
