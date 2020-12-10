<template>
  <div class="day1">
    <h4>
      <p>day1/例题1</p>
      var arr = [['A,B'],['a','b'],[1,2]];求二位数组的全排列组合 结果： Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2
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
  name: "Day1",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      //  常量
      //  状态
      flag: true,
      //  变量
      arr: [
        ["A", "B"],
        ["a", "b"],
        ["1", "2"],
      ],
      newArr: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onCompute1(arr) {
      //实现方式一：尾递归
      var len = arr.length;
      if (len >= 2) {
        var len1 = arr[0].length;
        var len2 = arr[1].length;
        var items = new Array(len1 * len2);
        var index = 0;
        for (let i = 0; i < len1; i++) {
          for (let j = 0; j < len2; j++) {
            items[index] = arr[0][i] + arr[1][j];
            index++;
          }
          console.log(items);
        }
        let newArr = new Array(len - 1);
        for (let i = 2; i < arr.length; i++) {
          newArr[i - 1] = arr[i];
        }
        newArr[0] = items;
        this.onCompute1(newArr);
      } else {
        this.newArr = arr[0];
      }
    },
    onCompute2(arr) {
      //实现方式二
      const getResult = (arr1, arr2) => {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
          return;
        }
        if (!arr1.length) {
          return arr2;
        }
        if (!arr2.length) {
          return arr1;
        }
        let result = [];
        //写法二：
        // let index = 0;
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2.length; j++) {
            //写法一：
            console.log("String(arr1[i]) + String(arr2[j])", String(arr1[i]) + String(arr2[j]));
            result.push(String(arr1[i]) + String(arr2[j]));
            //写法二：
            // result[index] = arr1[i] + arr2[j];
            // index++;
          }
        }
        return result;
      };
      const findAll = (arr) =>
        //reduce：数组累加器，使用了归并方法，reduce与其他遍历方法不一样的地方就在，每次都使用将前面数组遍历产生的结果与当前遍历项进行运算。
        /**
         * 参数：
         * total：必需，初始值，或者是计算结束后的返回值，
         * currentValue：必需，当前元素，
         * currentIndex：可选，当前元素的索引，
         * arr：可选，当前元素所属的数组对象，
         * initialValue：可选，传递给函数的初始值，相当于total的初始值
         */
        /**
         * 用法：
         * array.reduce(function(total,currentValue,currentIndex,arr),initialValue);
         * 简写：
         * array.reduce((total,currentValue,currentIndex,arr)=>{},initialValue);
         */
        arr.reduce((total, current, index, arr) => {
          console.log("total", total);
          console.log("current", current);
          console.log("currentIndex", index);
          console.log("arr", arr);

          return getResult(total, current);
        }, []);
      this.newArr = findAll(arr);
    },
    onCompute3(arr) {
      let res = [],
        lengthArr = arr.map((d) => d.length);
      let indexArr = new Array(arr.length).fill(0); //将数组全部使用默认值0代替
      this.getAll(arr, indexArr, res, lengthArr);
    },
    getAll(arr, indexArr, res, lengthArr) {
      let str = "";
      arr.forEach((item, index) => {
        str += item[indexArr[index]];
      });
      res.push(str);
      let overflow = this.addIndexArr(arr, indexArr, res, lengthArr);
      if (overflow) {
        console.log("res", res);
        this.newArr = res;
        return;
      } else {
        this.getAll(arr, indexArr, res, lengthArr);
      }
    },
    addIndexArr(arr, indexArr, res, lengthArr) {
      indexArr[0] = indexArr[0] + 1;
      let i = 0;
      let overflow = false;
      while (i <= indexArr.length - 1) {
        if (indexArr[i] >= lengthArr[i]) {
          if (i < indexArr.length - 1) {
            indexArr[i] = 0;
            indexArr[i + 1] = indexArr[i + 1] + 1;
          } else {
            overflow = true;
          }
        }
        i++;
      }
      return overflow;
    },
  },
  filters: {},
  created() {},
  mounted() {
    // this.onCompute1(this.arr);
    // this.onCompute2(this.arr);
    this.onCompute3(this.arr);
  },
  destoryed() {},
};
</script>
<style lang="scss" scoped>
.day1 {
}
</style>
