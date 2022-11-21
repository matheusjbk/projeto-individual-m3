import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(jsonServer.rewriter({
"/conveniencia/lista":"/conveniencia",
"/conveniencia/produto/refrigerante":"/conveniencia/1",
"/conveniencia/produto/suco":"/conveniencia/2",
"/conveniencia/produto/pipoca":"/conveniencia/3",
"/conveniencia/produto/hamburger":"/conveniencia/4",
"/conveniencia/produto/cachorro_quente":"/conveniencia/5",
"/conveniencia/produto/chocolate":"/conveniencia/6",
"/banheiros/lista":"/banheiros",
"/banheiros/masc1":"/banheiros/1",
"/banheiros/masc2":"/banheiros/2",
"/banheiros/fem1":"/banheiros/3",
"/banheiros/fem2":"/banheiros/4",
"/banheiros/masculino":"/banheiros?masculino=true",
"/banheiros/feminino":"/banheiros?feminino=true",
"/salas/lista":"/salas",
"/salas/disponivel/1":"/salas/1",
"/salas/disponivel/2":"/salas/2",
"/salas/disponivel/3":"/salas/3",
"/salas/disponivel/4":"/salas/4",
"/salas/disponivel/5":"/salas/5",
"/filmes/lista":"/filmes",
"/filmes/carros":"/filmes/1",
"/filmes/sociedade_do_anel":"/filmes/2",
"/filmes/toy_story":"/filmes/3",
"/filmes/de_volta_para_o_futuro":"/filmes/4",
"/filmes/uma_nova_esperanca":"/filmes/5",
"/filmes/genero/fantasia":"/filmes?genero_like=fantasia",
"/filmes/genero/animacao":"/filmes?genero_like=animação",
"/filmes/genero/ficcao":"/filmes?genero_like=ficção"
}))
server.use(router);

server.listen(port);