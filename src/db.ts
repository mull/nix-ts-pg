import {
  createPool, 
  createTypeParserPreset,
  TypeParserType
} from 'slonik'


export const pool = createPool((process.env.DATABASE_URL as string), {
  typeParsers: [
    ...createTypeParserPreset(),

    // Note that custom type parsers must also be added to writeTypes in typegen.config.js

    // The built-in date parser is poor and returns a string
    {
      name: 'date',
      parse: (v) => v ? new Date(v) : null
    } as TypeParserType
  ]
})