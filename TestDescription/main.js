import input from "analiza-sync";
import {
  GetPeopleList,
  saveToFilePeopel,
  GetCallRecords,
  saveToFileTranscriptions,
  SearchPeoplebyName,
  SearchPeoplebyAge,
} from "./utils/utils.js";
async function init() {
  do {
    try {
      console.log(`1. Get People List
2 Send a request to the intelligence server - general url + “/people”
3 Receive an array of people objects.
4 Save only the array into a file named PEOPLE.json.
5 Do not save any extra text or metadata - keys, variable declarations etc. JUST THE
ARRAY
6 exite`);
      const point = input("enter number: ");
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
        const url2 = `https://spies-test-server.vercel.app/transcriptions`;
        const data2 = await GetCallRecords(url2);
        saveToFileTranscriptions("data/TRANSCRIPTIONS.json", data2);
      }

      console.log(await SearchPeoplebyName(""));
      console.log(await SearchPeoplebyAge(43));
    } catch (err) {
      console.log(err);
    }
  } while (point === "6");
}

init();
