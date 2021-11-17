import "./App.css";
// import { useState } from "react";

function App() {
  const animalList = [
    {
      fullname: "Mandu the amazing cat",
      age: 9,
      key: 1,
    },
    {
      fullname: "Mia the black cat",
      age: 9,
      key: 2,
    },
    {
      fullname: "Leeloo the growing dog",
      age: 1,
      key: 3,
    },
    {
      fullname: "Toothless the trained dragon",
      age: 14,
      key: 4,
    },
    {
      fullname: "ScoobyDoo the wondering dog",
      age: 58,
      key: 5,
    },
    {
      fullname: "Horsey the horsing horse",
      age: 10,
      key: 6,
    },
  ];
  let animalListCopy = [...animalList];

  return (
    <div className="App">
      <h1>Animal List</h1>
      <div>
        <p>Filters:</p>
        <button>Cats</button> <button>Dogs</button> <button>All</button>
      </div>
      <table id="list">
        <thead>
          <tr id="sorting">
            <th data-action="sort" data-sort-direction="asc" data-sort="winner">
              🏆
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="star">
              ⭐
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="name">
              Name
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="type">
              Type
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="desc">
              Description
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="age">
              Age
            </th>
            <th></th>
          </tr>
        </thead>
        <AnimalList animals={animalListCopy} />
      </table>
    </div>
  );
}

function AnimalList(prop) {
  console.log(prop.animals);
  const mapped = prop.animals.map((animal) => <Animal {...animal} key={animal.key} />);
  return <tbody>{mapped}</tbody>;
}

function Animal(prop) {
  const texts = prop.fullname.split(" ");

  return (
    <tr>
      <td data-field="winner">🏆</td>
      <td data-field="star">⭐</td>
      <td data-field="name">{texts[0]}</td>
      <td data-field="type">{texts[3]}</td>
      <td data-field="desc">{texts[2]}</td>
      <td data-field="age">{prop.age}</td>
    </tr>
  );
}

export default App;
