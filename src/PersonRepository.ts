import fs from 'fs';
import path from 'path';
import IRepository from './IRepository';
import Person from './Person';

export default class PersonRepository implements IRepository<Person> {
  private people: Person[];

  private static readonly PEOPLE_FILE_PATH = path.join(
    __dirname,
    'data/people.json'
  );

  public constructor() {
    this.people = this.LoadPeople();
  }

  public list(): Person[] {
    return this.people;
  }

  public get(id: string): Person {
    return <Person>this.people.find((person) => person.id === id);
  }

  public add(entity: Person): Person {
    throw new Error('Method not implemented.');
  }

  public update(entity: Person): Person {
    throw new Error('Method not implemented.');
  }

  public delete(id: string): void {
    throw new Error('Method not implemented.');
  }

  private LoadPeople(): Person[] {
    const peopleJson = fs.readFileSync(PersonRepository.PEOPLE_FILE_PATH);
    return <Person[]>JSON.parse(peopleJson.toString());
  }
}
