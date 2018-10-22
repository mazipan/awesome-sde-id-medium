const fs = require('fs')

const readme = fs.readFileSync('README.md').toString()
const regex = /^\+\s(.+):\s\[@(.+)\]\((http.+)\)/
const jsonFilename = 'data-generated.json'

let match, data = []
for (var line of readme.split('\n')) {
  match = line.match(regex)
  if (match) {
    data.push({
      fullname: `${match[1]}`,
      username: `${match[2]}`,
      link: `${match[3]}`
    })
  }
}

fs.writeFileSync(jsonFilename, JSON.stringify(data, false, 2))
