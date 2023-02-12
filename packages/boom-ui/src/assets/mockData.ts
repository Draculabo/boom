import { ref } from 'vue';

type dataSource = {
  tHead: any[];
  tBody: any[];
};
// 表格初始化数据
export const tableData = ref<dataSource>({
  tHead: [
    {
      key: 'id',
      text: 'StuNo',
      editable: false,
    },
    {
      key: 'name',
      text: 'StuName',
      editable: false,
    },
    {
      key: 'age',
      text: 'Age',
      editable: false,
    },
    {
      key: 'schooling',
      text: 'Education',
      editable: true,
    },
    {
      key: 'isMarried',
      text: 'Married',
      editable: true,
    },
    {
      key: 'marks',
      text: 'Grades',
      editable: true,
    },
  ],
  tBody: [
    {
      id: 1,
      name: 'Lucas',
      age: 18,
      schooling: 'master',
      isMarried: true,
      marks: 75,
    },
    {
      id: 2,
      name: 'Halsey',
      age: 18,
      schooling: 'bachelor',
      isMarried: false,
      marks: 55,
    },
    {
      id: 3,
      name: 'malone',
      age: 18,
      schooling: 'doctor',
      isMarried: true,
      marks: 95,
    },
  ],
});
export const editData = (inputData: any) => {
  const { index, key, value, text } = inputData;
  // 用户输入的值不等于原来的值才可以
  if (tableData.value.tBody[index][key] !== value) {
    const confirm: boolean = window.confirm(`Change Index:【${index}】& text:【${text}] to Value:【${value}]`);
    if (confirm) {
      tableData.value.tBody = tableData.value.tBody.map((item, idx) => {
        index === idx && (item[key] = value);
        return item;
      });
    }
  }
};
