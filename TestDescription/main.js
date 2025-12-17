import {GetPeopleList,saveToFilePeopel,GetCallRecords,saveToFileTranscriptions,SearchPeoplebyName,SearchPeoplebyAge} from './utils/utils.js'

async function init() {
  try {
    const url1 = `https://spies-test-server.vercel.app/people`;
    const data1 = await GetPeopleList(url1);
    saveToFilePeopel("data/PEOPLE.json", data1);

    const url2 = `https://spies-test-server.vercel.app/transcriptions`;
    const data2 = await GetCallRecords(url2);
    saveToFileTranscriptions("data/TRANSCRIPTIONS.json", data2);
    console.log(await SearchPeoplebyName(""));
    console.log(await SearchPeoplebyAge(43));
  } catch (err) {
    console.log(err);
  }
}

init();
