# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

### Plant

```jsx
const plant = {
  id: "",
  type: "",
  name: "",
  lastWatered: "",
  wateringInterval: 0,
};
```

### Plants

```jsx
const plants = [plant, plant];
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-03-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2022-03-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2022-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-03-20",
  wateringInterval: 1000,
};

const plants = [plant1, plant2, plant3, plant4];
```

## Structure

### HTML

- body
  - header
    - h1 title
  - main
    - article
      - h1 name of plant
      - p type
      - border when badly watered

### Components

- App
  - Header (?)
  - PlantList
    - PlantListItem

## Component Data

- App // Needs no data
  - Header // Needs no data
  - PlantList // arr plant list
    - PlantListItem // obj of a specific plant
