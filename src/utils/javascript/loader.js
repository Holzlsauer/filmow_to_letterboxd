import {PythonShell} from 'python-shell';

function loadPythonFile (user) {
  let options = {
    mode: 'text',
    args: [user]
  };
  PythonShell.run(`${__dirname}/../python/app.py`, options, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
}

export default loadPythonFile;
