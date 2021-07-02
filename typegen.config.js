/** @type {import('@slonik/typegen').Options} */
const typegen = require('@slonik/typegen')

module.exports.default = {
  rootDir: 'src', 
  glob: ['{queries/**.ts,sql/**.sql}'],
  connectionURI: process.env.DATABASE_URL,

  writeTypes: queries => {
    queries.forEach(query => {
      query.fields.forEach(field => {
        if (field.regtype === 'date') {
          field.typescript = 'Date'
        }
      })
    })

    return typegen.defaults.defaultWriteTypes()(queries)
  }
}