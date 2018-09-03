const userModle = require('../mysql/mysql')
const moment = require('moment')

exports.usertest = async ctx => {
  console.log('------正在执行测试-------')
  await userModle.findAllUsers().then((res, err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
      ctx.body = res
    }
  })
}

exports.addNewTea = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>addNewTea')
  console.log(ctx.request.body)
  console.log('-------------------')
  let vs = []
  // let date = new Date()
  vs[0] = `addNewTea${moment().format('YYYY-MM-DD#HH:mm:ss')}admin`
  console.log(vs[0])
  let ctxvalue = ctx.request.body
  vs[1] = ctxvalue.teaname
  vs[2] = ctxvalue.teawxname
  vs[3] = ctxvalue.teamob
  console.log(vs)
  await userModle.addNewTea(vs).then((res, err) => {
    if (err) {
      console.log(err)
      ctx.body = {
        msg: '0000'
      }
    } else {
      console.log(res)
      ctx.body = {
        msg: '1024'
      }
    }
  })
}

exports.addNewStu = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>addNewStu>>>下面是收到的信息')
  console.log(ctx.request.body)
  console.log('-------------------')
  let vs = []
  // let date = new Date()
  vs[0] = `addNewStu${moment().format('YYYY-MM-DD#HH:mm:ss')}admin`
  console.log(vs[0])
  let ctxvalue = ctx.request.body
  vs[1] = ctxvalue.stuname
  vs[2] = ctxvalue.stuwxname
  vs[3] = ctxvalue.stumob
  vs[4] = ctxvalue.stuwhoname
  vs[5] = ctxvalue.stuwhowxname
  vs[6] = ctxvalue.stuwhomob
  console.log(vs)
  await userModle.addNewStu(vs).then((res, err) => {
    if (err) {
      console.log(err)
      ctx.body = {
        msg: '0000'
      }
    } else {
      console.log(res)
      ctx.body = {
        msg: '1024'
      }
    }
  })
}


exports.addNewCo = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>addNewCo>>>下面是收到的信息')
  console.log(ctx.request.body)
  console.log('-------------------')
  let vs = []
  vs[0] = `addNewCo${moment().format('YYYY-MM-DD#HH:mm:ss')}admin`
  console.log(vs[0])
  let ctxvalue = ctx.request.body
  vs[1] = ctxvalue.coname
  vs[2] = ctxvalue.cosome
  vs[3] = ctxvalue.coteatid
  console.log(vs)
  await userModle.addNewCo(vs).then((res, err) => {
    if (err) {
      console.log(err)
      ctx.body = {
        msg: '0000'
      }
    } else {
      console.log(res)
      ctx.body = {
        msg: '1024'
      }
    }
  })
}

exports.getCos = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>getCos>>>下面是收到的信息')
  console.log(ctx.request.body)
  console.log('-------------------')
  let ctxvalue = ctx.request.body
  let vs = ctxvalue.teatid
  console.log(vs)
  await userModle.getCos(vs).then((res, err) => {
    if (err) {
      console.log(err)
      ctx.body = {
        msg: '0000'
      }
    } else {
      console.log(res)
      ctx.body = {
        msg: '1024',
        data: res
      }
    }
  })
}

exports.getStuByTea = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>getStuByTea>>>下面是收到的信息')
  console.log(ctx.request.body)
  console.log('-------------------')
  let ctxvalue = ctx.request.body
  let vs = ctxvalue.teatid
  console.log(vs)
  await userModle.getStuByTea().then((res, err) => {
    if (err) {
      console.log(err)
      ctx.body = {
        msg: '0000'
      }
    } else {
      console.log(res)
      ctx.body = {
        msg: '1024',
        data: res
      }
    }
  })
}
// postCotostu
exports.postCotostu = async ctx => {
  console.log('-------------------')
  console.log('正在执行>>>postCotostu>>>下面是收到的信息')
  console.log(ctx.request.body)
  console.log('-------------------')
  var vs = ctx.request.body
  var vscotid = vs.cotid
  var vsstus = vs.stus
  var data = []
  console.log(vs)
  // await vsstus.forEach(async element => {
    for(element of vsstus){
    if (element.isChoose) {
      let sr = [vscotid, element.tid]
      console.log('-------被选中后的sr------')
      console.log(sr)
      let f = await userModle.findCotostu(sr).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
          return res[0].flag
        }
      })
      console.log(f)
      if (f) {
        console.log('-已经存在关系-')
        // ctx.body = {
        //   msg: '已经存在关系'
        // }
        // data.push([element.stuname,' >>> 已经存在关系 '])
        data.push([`${element.stuname} >>>已经存在关系`])
      } else {
        console.log('--正在增加关系--')

        let stctid = `putCotostu${moment().format('YYYY-MM-DD#HH:mm:ss')}admin`
        let vs2 = [stctid, ...sr]
        await userModle.putCotostu(vs2).then((res, err) => {
          if (err) {
            console.log(err)
          } else {
            console.log(res)
            // ctx.body = {
            //   msg: '关系已经增加进去了'
            // }
            // data.push([element.stuname, '>>>关系已经增加进去了'])
            data.push([`${element.stuname} >>>关系已经增加进去了`])
          }
        })

      }
    } else {
      let sr2 = [vscotid, element.tid]
      console.log('-------被选中后的sr2------')
      console.log(sr2)
      let fe = await userModle.findCotostu(sr2).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
          return res[0].flag

        }
      })
      console.log(fe)
      if (fe) {
        console.log('--正在删除关系--')
        await userModle.delCotostu(sr2).then((res, err) => {
          if (err) {
            console.log(err)
          } else {
            console.log(res)
            // ctx.body = {
            //   msg: '数据关系已经删除'
            // }
            // data.push([element.stuname, '>>>数据关系已经删除'])
            data.push([`${element.stuname} >>>数据关系已经删除`])
          }
        })
      }else{
        data.push([`${element.stuname} >>>数据不存在，未做处理`])
      }
    }
  }
  // })
  ctx.body = {
    msg: '数据处理完毕',
    data: data
  }
}