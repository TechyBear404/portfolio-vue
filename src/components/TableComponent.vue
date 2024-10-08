<template>
  <table>
    <thead>
      <tr>
        <th @click="sortTable('name')">Name</th>
        <th @click="sortTable('email')">Email</th>
        <th @click="sortTable('age')">Age</th>
        <th @click="sortTable('isActive')">Active</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="option in sortedList" :key="option.id">
        <td>{{ option.name }}</td>
        <td>{{ option.email }}</td>
        <td>{{ option.age }}</td>
        <td>{{ option.isActive }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  options: Array,
});
let sortedList = ref(props.options);

// const orderBy = ref("name");
// const order = ref("asc");

const sortTable = (name = "name") => {
  // const options = props.options;
  sortedList.value = sortedList.value.sort((a, b) => {
    return a[name].localeCompare(b[name], "fr", {
      ignorePunctuation: true,
    });
  });
  // console.log(sortedTable);
  // return sortedTable;
};
sortTable();
</script>
