<template>
  <div class="day2">
    <h4>
      <p>day2/例题1</p>
      实现一个简单的仓储系统，可以不断转入和转出货物，货物最多有两层子类目，数字代表该子类目转入/转出的数量。转出时不能出现爆仓情况。
    </h4>

    <div>arr: {{ arr }}</div>
    <div>newArr:{{ newArr }}</div>
  </div>
</template>
<script>
//  常量声明

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: "Day2",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      //  常量
      //  状态
      flag: true,
      //  变量
      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * cargo 说明：
     * key代表类目/子类目名称
     * value 为number时， 代表这个类目的数量，为object时，代表下一层货物的集合，最多嵌套两层
     * {
     * productA: { //代表货物的类目名称
     * a:1,//1代表子类目 a 的数量
     * b:2,
     * c:{ //c代表货物的子类名称
     * c1:1,//c1代表货物的子类名称
     * }
     * },
     * productB:{
     *   e:6
     * }
     * }
     *
     * 爆仓情况：如转入{productA:{a:3,c:1}} 转出{{productA:{a:4}},就会发生子类目a爆仓，此时要返回报错。}
     */
    //    class Depository{
    //      /**
    //       * @param options
    //       */
    //      constuctor(option){
    //      }
    //      transferIn(cargo){
    // //转入货物
    //      }
    //      transferOut(cargo){
    //        //转出货物
    //      }
    //    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style lang="scss" scoped>
.day2 {
}
</style>
