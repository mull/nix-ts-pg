import {pool} from './db'
import {some_dates} from './queries/dates'

pool.connect(async (connection) => {
  const res1 = await connection.query(some_dates)
  console.log(res1.rows[0].date_actual)
  console.log(typeof res1.rows[0].date_actual)

})