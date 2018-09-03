const config = require('../config/config')
const mysql = require('mysql')

const pool = mysql.createPool({
  host: config.Dbinfo.host,
  password: config.Dbinfo.password,
  user: config.Dbinfo.user,
  port: config.Dbinfo.port,
  database: config.Dbinfo.database
})

let query = (sql, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        PromiseRejectionEvent(err)
      } else {
        conn.query(sql, value, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          conn.release()
        })
      }
    })
  })
}

exports.findAllUsers = () => {
  let _sql = 'select * from userinfo;'
  return query(_sql)
}

exports.addNewTea = (vs) => {
  let _sql = 'INSERT teainfo SET tid=?,teaname=?,teawxname=?,teamob=?;'
  return query(_sql, vs)
}

exports.addNewStu = (vs) => {
  let _sql = `INSERT stuinfo SET 
  stuinfo.tid=?,
  stuinfo.stuname=?,
  stuinfo.stuwxname=?,
  stuinfo.stumob=?,
  stuinfo.stuwhoname=?,
  stuinfo.stuwhowxname=?,
  stuinfo.whomob=?
  ;`
  return query(_sql, vs)
}

exports.addNewCo = (vs) => {
  let _sql = `INSERT cosinfo SET
  cosinfo.tid=?,
  cosinfo.coname=?,
  cosinfo.cosome=?,
  cosinfo.coteatid=?  
  ;`
  return query(_sql, vs)
}

exports.getCos = (vs) => {
  let _sql = `SELECT
  cosinfo.tid,
  cosinfo.coname
  FROM
  cosinfo
  WHERE
  cosinfo.coteatid='${vs}'  
  ;`
  return query(_sql, vs)
}

exports.getStuByTea = () => {
  let _sql = `SELECT
  stuinfo.tid,
  stuinfo.stuname
  FROM
  stuinfo
  ;`
  return query(_sql)
}
// postCotostu
exports.findCotostu = (vs) => {
  let _sql = `SELECT
  Count(stutoco.tid) AS flag
  FROM
  stutoco
  WHERE
  stutoco.cotid=? AND
  stutoco.stutid=?  
  ;`
  return query(_sql,vs)
}

exports.putCotostu = (vs) => {
  let _sql = `INSERT stutoco SET
  stutoco.tid=?,
  stutoco.cotid=?,
  stutoco.stutid=?
  ;`
  return query(_sql,vs)
}

exports.delCotostu = (vs) => {
  let _sql = `DELETE from stutoco WHERE
  stutoco.cotid=? AND
  stutoco.stutid=?  
  ;`
  return query(_sql,vs)
}