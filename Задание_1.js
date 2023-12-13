const WindowsVersion = {
    name: 'Windows 7',
    version: '6.1',
    year: 2009,
    developer: 'Microsoft Corporation',
};

getObjectValues(WindowsVersion);

function getObjectValues(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ' = ' + obj[key]);
      }
    }
}
