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
    if(data[i].name===name){
        return data[i]
     };
  }
  return 'Persona non invenitur';
}



export async function SearchPeoplebyAge(age) {
  const data = await readFromFile("data/PEOPLE.json");
  for (let i = 0; i < data.length; i++) {
    if(data[i].age===age){
        return data[i]
     };
  }
  return 'Persona non invenitur';
}

// async function init() {
//   //   const url1 = `https://spies-test-server.vercel.app/people`;
//   //   const data1 = await GetPeopleList(url1);
//   //   saveToFilePeopel("data/PEOPLE.json",data1);

//   //    const url2 = `https://spies-test-server.vercel.app/transcriptions`;
//   //   const data2 = await GetCallRecords(url2);
//   //   saveToFileTranscriptions("data/TRANSCRIPTIONS.json",data2);
//   console.log(await SearchPeoplebyName(""));
//   console.log(await SearchPeoplebyAge(3333));
  
// }

// init();
