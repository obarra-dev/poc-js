// callback firt error

/*
ping("someurl", (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

const ping = (ip, callback) => {
    const client = net.connect({port: 80, host: ip} ), () => {
        client.end()
        callback(null, {time: 12, ip})
    }

    client.on('error', (err) => {
        client.end()
        callback(err)
    })
}

*/

function getDataWithCallback(callback) {
  setTimeout(() => {
    try {
        //throw new Error("error from callback");
        callback(null, { data: "data from callback" });
      } catch (e) {
        callback(e);
      }
  }, 2000);
}

getDataWithCallback((err, res) => {
  if (err) console.error("err: " +err);
  else console.log("res: " + res);
});

function getDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        //throw new Error("error from promise");
        resolve({ data: "data from promise" });
      } catch (e) {
        reject(e);
      }
    }, 2000);
  });
}


getDataWithPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

async function getDataWithAsyncAwait() {
  try {
    const data = await getDataWithPromise();
    console.log(`using async/await`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getDataWithAsyncAwait();

(async () => {
    try {
      const data = await getDataWithPromise();
      console.log(`using async/await with out name function`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })();

console.log((async () => "hello world")());
