// import fs from 'fs';
import Papa from 'papaparse';

export function toJson (file) {
    // const file = fs.createReadStream(filepath)
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete (results, file) {
          resolve(results.data)
        },
        error (err, file) {
          reject(err)
        }
      })
    })
  }
  // Now when you call toJson(), you can use either await if you are inside of an async function or chain .then() on the returned Promise to access the data.

  export async function parseCsv(path) {
    try {
      const data = await toJson(path)
      // do something with the data...
      // console.log(data)
    //   convertToCsv(data);
      return data;
    } catch (err) {
      console.error('Could not parse json', err)
    }
  }

  export function convertToCsv(data) {
    const csv = Papa.unparse(data);
    console.log(csv);
    return csv;
  }

  parseCsv('./Book1.csv')