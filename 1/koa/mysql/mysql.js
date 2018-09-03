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
  let _sql = 'select * from uuserinfo;'
  return query(_sql)
}

exports.findUserByName = (name) => {
  let _sql = `select * from uuserinfo where uuserinfo.uname="${name}";`
  return query(_sql)
}

exports.putDataOfBigJS = (value) => {
  let _sql = `insert tkindatabyp set jigou=?,qudao=?,year=?,month=?,whichtype=?,invalue=?,whoin=?;`
  return query(_sql, value)
}

exports.findDataOfBigJS = (value) => {
  let _sql = `select count(*) from tkindatabyp where jigou=? and qudao=? and year=? and month=? and whichtype=? limit 1;`
  return query(_sql, value)
}

exports.updateDataOfBigJS = (value) => {
  let _sql = `update tkindatabyp set invalue=? ,whoin=? where jigou=? and qudao=? and year=? and month=? and whichtype=?;`
  return query(_sql, value)
}