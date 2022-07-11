const products = [
    { name: 'coca', counter: 0 },
    { name: 'guarana', counter: 0 },
    { name: 'fanta', counter: 0 }]

function searchName(nome){
    const product = products.find(produto => produto.name === nome);
    if(product) return product;
    return;
}

function addProduct(nome) {
    const product = searchName(nome);
    if(!product) return alert('Esse produto não existe');
    if(product.counter>=10){
        alert('O valor máximo é 10')
        return
    }
    product.counter++;
    writerUnit(product);
}

function subProduct(nome) {
    const product = searchName(nome);
    if(!product) return alert('Esse produto não existe');
    if(product.counter<=0){
        alert('O valor mínimo é 0')
        return
    }
    product.counter--;
    writerUnit(product);
}

function writerUnit(produto){
    const unit = document.getElementById(produto.name);
    console.log(produto)
    unit.innerHTML = produto.counter;
}

console.log(products)