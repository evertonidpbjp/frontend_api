// embaralha as questões
// 1º map = varre o array de ids de questões, criando um objeto q além do id tb possui um atributo c/ valor aleatório
// 1º sort = ordena os objetos gerados de acordo c/ o valor aleatório
// 2º map = volta a varrer os objetos retornado agora somente os valors (ids), porém agora fora da ordem original
export function embaralhar(elementos: any[]): any[]{
    return elementos
    .map(valor => ({valor: valor, aleatorio: Math.random()}))
    .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
    .map(obj => obj.valor)
}

