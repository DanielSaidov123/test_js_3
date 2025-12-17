import fs from "fs/promises";

export async function GetPeopleList(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  return await res.json();
}

export async function saveToFilePeopel(fileName, data) {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2), "utf8");
}

export async function GetCallRecords(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  return await res.json();
}

export async function saveToFileTranscriptions(fileName, data) {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2), "utf8");
}

export async function readFromFile(fileName) {
  const data = await fs.readFile(fileName, "utf8");
  return JSON.parse(data);
}

export async function SearchPeoplebyName(name) {
  const data = await readFromFile("data/PEOPLE.json");
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      return data[i];
    }
  }
  return "Persona non invenitur";
}

export async function SearchPeoplebyAge(age) {
  const data = await readFromFile("data/PEOPLE.json");
  for (let i = 0; i < data.length; i++) {
    if (data[i].age === age) {
      return data[i];
    }
  }
  return "Persona non invenitur";
}

export async function FindDangerousPeople(fileName) {
  let count = 0;
  const obj = {};
  const dataJson = await fs.readFile(fileName, "utf8");
  const dataJS = JSON.parse(dataJson);
  for (let i = 0; i < dataJS.length; i++) {
    const text = dataJS[i].content.toUpperCase();
    if (text.includes("DEATH")) {
      count += 1;
    }
    if (text.includes("KNIFE")) {
      count += 1;
    }
    if (text.includes("BOMB")) {
      count += 1;
    }
    if (text.includes("ATTACK")) {
      count += 1;
    }
    if (count > 0) {
      if (dataJS[i].age in obj) {
        obj[dataJS[i].age].push(count);
      } else {
        obj[dataJS[i].age] = [count];
      }
    }

    count = 0;
  }
  return Object.entries(obj);
}

function ddd(arr) {
  const object = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1].length; j++) {
      count += arr[i][1][j];
    }
    object[arr[i][0]] = count / arr[i][1].length;
    count = 0;
  }

  const a = Object.entries(object);

  a.sort(sortFunction);

  function sortFunction(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] > b[1] ? -1 : 1;
    }
  }

  return a;
}

async function findU(arr, fileName) {
  const list = [];
  const dataJson = await fs.readFile(fileName, "utf8");
  const dataJS = JSON.parse(dataJson);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < dataJS.length; j++) {
        console.log(dataJS[j].age);

      if (dataJS[j].age == arr[i][0]) {
        console.log(dataJS[j].age);
        
        list.push(dataJS[j]);
      }
    }
  }
  return list;
}

async function init() {
  const arr = await FindDangerousPeople("data/TRANSCRIPTIONS.json");
  const a=ddd(arr);
  console.log(await findU(a,'data/PEOPLE.json'));
  
}
init();
