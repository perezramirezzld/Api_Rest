import express, { application } from 'express';
import { json } from 'body-parser';
import PersonRepository from './PersonRepository';

const app = express();

app.use(json());

app.get('/people', (req, res) => {
  const personRepository = new PersonRepository();

  const people = personRepository.list();

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(people));
});

app.get('/people/:id', (req, res) => {
  const id = req.params.id;

  const personRepository = new PersonRepository();

  const person = personRepository.get(id);

  if (!person) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    res.end();

    return;
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(person));
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
