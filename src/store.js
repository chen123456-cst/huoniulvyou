import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
        data1: []
    },
    mutations: {
        add(state, infor) {
            var bool = true;
            state.data.forEach((d) => {
                if (d.goods_id == infor.infor.goods_id) {
                    d.number += parseInt(infor.num)
                    bool = false
                }
            })
            if (bool) {
                if (infor.infor.imgname) {
                    Vue.set(infor.infor, 'IMG', infor.infor.imgname)
                } else if (infor.infor.img_name) {
                    Vue.set(infor.infor, 'IMG', infor.infor.img_name)
                } else {
                    Vue.set(infor.infor, 'IMG', infor.infor.carousel_image[0])
                }
                Vue.set(infor.infor, 'number', infor.num)
                state.data.push(infor.infor)
            }
        },
        addnum(state, index) {
            state.data[index].number--;
            console.log(state.data[index].number)
        },
        subnum(state, index) {
            state.data[index].number++;
            console.log(state.data[index].number)
        },
        del(state, index) {
            Vue.delete(state.data, index)
        },
        // 验证用户名和密码
        provide(state, i) {
            var bool = false;
            state.data1.forEach((d) => {
                if (i.pwd != '' && i.user != '') {
                    if (i.user == d.user && i.pwd == d.pwd) {
                        window.location.href = "/cstlistadd";
                    }
                } else if (i.user != d.user) {
                    // window.location.href = "/cstjoin";
                }
            });
            console.log(state.data1);
        },
        //注册
        provide1(state, i) {
            var bool = true;
            state.data1.forEach((d) => {
                if (i.pwd != '' && d.user != '' && d.isShow != '') {
                    if (i.user != d.user) {
                        bool = false;
                    }
                }
                console.log(this.state.data1);
            })
            if (bool == false) {
                state.data1.push(i);
            }
            console.log(state.data1);

        }

    },
    getters: {
        data(state) {
            return state.data
        },
        total(state) {
            var sum = 0;
            state.data.forEach((d) => {
                sum += d.number * d.price
            })
            return sum
        }
    }
})