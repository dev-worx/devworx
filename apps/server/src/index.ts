import fastify from 'fastify';

const app = fastify({ logger: false });

app.get('/', (req, rep) => {
  rep.send({
    hello: 'world',
  });
});

app.listen({ port: 3000 }, () => {
  console.log('app listening on localhost:3000');
});
