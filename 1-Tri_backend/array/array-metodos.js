//crie um array que contenha 3 frutas
//adicione 4 frutas com o método .push (<nomeFruta>)
//remova 1 fruta com .pop()
//faça um loop for que remova todas frutas
//verifique, se todas as frutas foram removidas
//imprima "nenhuma fruta encontrada"
const frutas = ['jaca', 'manga', 'maracuja']
console.log(frutas)
frutas.push('pessego')
frutas.push('abacate')
frutas.push('banana')
frutas.push('mulango')
console.log(frutas)
for (const fruta of frutas){
    console.log(fruta + ", removida...")
    frutas.pop()

    }
//console.log(frutas) 