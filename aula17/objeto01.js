let amigo = {nome: 'Geovani', 
idade: 25, 
altura: 1.75,
peso: 88,
engordar(p){
    console.log('Engordou.')
    this.peso += p
}};

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`);