<template>
  <div>
    <!-- 下面是标题 -->
    <Row>
      <Col span="24">AddComments</Col>
    </Row>
    <!-- 下面是选择课程的选项 -->
    <Row>
      <Col span="24">
      <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
          <p slot="title">请选择课程：</p>
          <p>
            <div>
              <Row>
                <Col span="6">选择要评论课程所在日期：{{selHadClaDate}}</Col>
                <Col span="6">
                <DatePicker v-model="selHadClaDate" type="date" placeholder="请选择上课的那一天" style="width: 200px"></DatePicker>
                </Col>
                <Col span="6">
                <Button type="primary" @click="getDaOfselHadClaDate">确定选择日期</Button>
                </Col>
                <Col span="6">下面是该日期所存在的课程：</Col>
              </Row>
              <!-- <Row>
                <div v-for="co of cosOfTheDate" :key="co.tid">
                  <Col span="3">
                  <Button type="error">{{co.coname}}</Button>
                  </Col>
                </div>
              </Row> -->

              <Row>
                <Col span='24'>
                <div>
                  {{selWhichCo}}
                  <RadioGroup v-model="selWhichCo">
                    <div v-for="co of cosOfTheDate" :key="co.tid">
                      <Row>
                        <Col span='4'>
                        <Radio :label="co.tid">
                          {{co.coname}}
                        </Radio>
                        </Col>
                      </Row>
                    </div>
                  </RadioGroup>
                </div>
                </Col>
              </Row>

              <Row>
                <Col span="8">请选择一个课程，点击右边的按钮以进一步做评论</Col>
                <Col span="8">
                <Button type="primary" @click="handleMakeSureCo">确定选择课程，开始做评论</Button>{{makeSureCo}}
                </Col>
              </Row>
            </div>
          </p>
        </Card>
      </div>
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
          <p slot="title">请确认以下信息，并确定后，开始录入评论：</p>
          <p>
            <div>
              <Row>
                <Col span="24">我是：{{selfName}}</Col>
                <Col span="24">此次评论的课程是：{{makeSureCo.coname}}课程所在的时间是：{{makeSureCo.cotime}}</Col>
                <Col span="24">下面是本门课程的我的学生：</Col>
                <Col span="24">
                <div>
                  <Row>
                    <div v-for="s of sureCoStus" :key="s[0].tid">
                      <Col span='4'> {{s[0].stuname}}
                      </Col>
                    </div>
                  </Row>
                </div>
                <div>
                  <Row>
                    <RadioGroup v-model="chsStu" v-for="s of sureCoStus" :key="s[0].tid">
                      <Radio :label="s[0].tid">{{s[0].stuname}}</Radio>
                    </RadioGroup>
                  </Row>
                </div>
                </Col>
              </Row>
            </div>
          </p>
          <p>
            <Button type="warning" @click="handleMakeSureStu">点我锁定录入人员</Button>
          </p>
          <p>
            {{makeSureStu}}
          </p>
        </Card>
      </div>
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
          <p slot="title">下面是分值评论系统，请录入：</p>
          <p>
            <div v-for="i in 6" :key="i">
              <Row>
                <Col span="4">{{rating.ab[i-1]}}</Col>
                <Col span="8">
                            <Rate show-text allow-half v-model="rating.sc[i-1]">
                <span style="color: #f5a623">{{ rating.sc[i-1]*2 }}</span>
            </Rate>
                </Col>
                <Col span="12">
                <Input v-model="rating.cm[i-1]" type="textarea" :autosize="true" placeholder="Enter something..." />
               </Col>
              </Row>
            </div>
          </p>
          <p>
            <Button type="warning" @click="handleMakeRatAndDoComments">确定评分生成随机评价</Button>
          </p>
        </Card>
      </div>
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
          <p slot="title">这个学生的评论：</p>
          <p>
            <div>
              <Row>
                <Col span="24">请输入评论：</Col>
                <Col span="24"><Input v-model="rating.comments" type="textarea" :rows="4" placeholder="Enter something..." /></Col>
              </Row>
            </div>
          </p>
          <p>
            <div>
              该学生既往的评论，显示3个,可以直接选择部分词语以粘贴到原文中去。
            </div>
          </p>
          <p>
            <div>
              该学生人工智能生成的评价，显示9个，点击我后可以直接进去到框子里面
            </div>
          </p>
        </Card>
      </div>
      </Col>
    </Row>
    <Row>
      <Button type="warning" @click="handleSubmit">确认后将检测数据信息正确性并提交项目</Button>
    </Row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AddComments',
  data () {
    return {
      selHadClaDate: '',
      cosOfTheDate: [],
      selWhichCo: '',
      makeSureCo: {},
      selfName: '',
      sureCoStus: [],
      chsStu: '',
      makeSureStu: {},
      rating: {
        ab: ['能力1', '能力2', '能力3', '能力4', '能力5', '能力6'],
        sc: [1, 2, 3, 4, 5, 6],
        cm: ['hao', 'huai', 'hao', 'huai', 'hao', 'huai'],
        comments: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      let pa = {
        rating: this.rating,
        teatid: this.$store.state.teainfo.teaname,
        stutid: this.chsStu,
        hadcotid: this.selWhichCo,
        hadcodate: this.selHadClaDate
      }
      axios.post('/api/postR_A_Cs', pa).then((res) => { console.log(res) })
    },
    getDaOfselHadClaDate () {
      let pa = {
        selDate: this.selHadClaDate
      }
      axios.post('/api/getDaOfselHadClaDate', pa).then(res => {
        console.log(res.data.data)
        this.cosOfTheDate = res.data.data
      })
    },
    handleMakeSureCo () {
      for (let co of this.cosOfTheDate) {
        if (co.tid === this.selWhichCo) {
          this.makeSureCo = co
        }
      }
      let pa = this.makeSureCo
      console.log(pa)
      axios.post('/api/getStusByHadCo', pa).then(res => {
        console.log(res)
        this.sureCoStus = res.data.data
      })
    },
    handleMakeSureStu () {
      for (let stu of this.sureCoStus) {
        if (stu[0].tid === this.chsStu) {
          this.makeSureStu = stu[0]
        }
      }
    },
    handleMakeRatAndDoComments () {
      this.rating.comments = 'sss'
    }
  },
  mounted () {
    this.selfName = this.$store.state.teainfo.teaname
  }
}
</script>
<style scoped>
</style>
