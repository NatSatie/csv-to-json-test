const fileName = process.argv.splice(2)[0]
const fs = require('fs')

const data = fs.readFileSync(`challenge/${fileName}`, 'utf8', (err, data) => {
  if (err){
    console.error(err)
  } console.log(data, "\n\n")
})

const main = () => {
  const splitted = data.split("\n" | 'EOF')
  const personData = splitted.map( (info, index) => {
    if (index !== 0 || info === '') {
      return info.split(",")
    } return null
  })
  console.log(personData)
}

main()