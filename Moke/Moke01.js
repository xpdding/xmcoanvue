export const getPJs = () => {
  return {
    msg: 200,
    data: [{
      pjname: 'pjname01',
      pjid: 'pjid01'
    },
    {
      pjname: 'pjname02',
      pjid: 'pjid02'
    },
    {
      pjname: 'pjname03',
      pjid: 'pjid03'
    },
    {
      pjname: 'pjname04',
      pjid: 'pjid04'
    },
    {
      pjname: 'pjname05',
      pjid: 'pjid05'
    },
    {
      pjname: 'pjname06',
      pjid: 'pjid06'
    }
    ]
  }
}

export const getTAGs = () => {
  return {
    msg: 200,
    data: [
      'tag01', 'tag02', 'tag03', 'tag04', 'tag05', 'tag06', 'tag07', 'tag08'
    ]
  }
}

export const getLISTs = () => {
  return {
    msg: 200,
    data: [{
      listid: 'L01',
      listname: 'listname01',
      listtags: ['tag01', 'tag02', 'tag03'],
      listft: '20180828',
      listet: '20180901',
      listflag: 1,
      listwhodo: 'xp',
      listchecked: false
    },
    {
      listid: 'L02',
      listname: 'listname02',
      listtags: ['tag06', 'tag07', 'tag08'],
      listft: '20180828',
      listet: '20180901',
      listflag: 1,
      listwhodo: 'xp',
      listchecked: false
    }, {
      listid: 'L03',
      listname: 'listname03',
      listtags: ['tag04', 'tag05', 'tag06'],
      listft: '20180828',
      listet: '20180901',
      listflag: 1,
      listwhodo: 'xp',
      listchecked: false
    }]
  }
}
