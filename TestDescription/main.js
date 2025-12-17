import input from "analiza-sync";
import {
  GetPeopleList,
  saveToFilePeopel,
  GetCallRecords,
  saveToFileTranscriptions,
  SearchPeoplebyName,
  SearchPeoplebyAge,
  asss,
  arrPopel,
  findU,
  ddd,
  FindDangerousPeople,
} from "./utils/utils.js";
async function init() {
  let point = NaN;
  do {
    try {
      console.log(`1.  Get People List
2 Get TRANSCRIPTIONS List
3 Search People by Name
4Search People by Age
5 Do not save any extra text or metadata - keys, variable declarations etc. JUST THE
ARRAY
6 exite`);
      point = input("enter number: ");

      if (point === "1") {
        const url1 = `https://spies-test-server.vercel.app/people`;
        const data1 = await GetPeopleList(url1);
        saveToFilePeopel("data/PEOPLE.json", data1);
      }
      if (point === "2") {
        const url2 = `https://spies-test-server.vercel.app/transcriptions`;
        const data2 = await GetCallRecords(url2);
        saveToFileTranscriptions("data/TRANSCRIPTIONS.json", data2);
      }
      if (point === "3") {
        const name = input("enter name: ");
        console.log(await SearchPeoplebyName(name));
      }
      if (point === "4") {
        const age = input("enter age: ");
        console.log(await SearchPeoplebyAge(Number(age)));
      }
      if (point === "5") {
        const arr = await FindDangerousPeople("data/TRANSCRIPTIONS.json");
        const a = ddd(arr);
        const x = await findU(a, "data/TRANSCRIPTIONS.json");
        asss(x);
        console.log(x);
      }
    } catch (err) {
      console.log(err);
    }
  } while (point !== "6");
}

init();
