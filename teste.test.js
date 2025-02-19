let a = 'oiee'
let b = 'oiee'

Deno.test("teste do oi  ", () => {
    if(a != 'oi') {
        throw new Error(`${a} não é oi`);
    } else{
        console.log(`${a} é de fato o oi`)
    }
    
})

Deno.test("Não pode der oi ", () =>{
    if (b=='oi' ) {
        throw new Error(`${b} é oi portanto está errado`);
    } else{
    console.log(`${b} não é oi! POrtanto está certo o teste`);}
})