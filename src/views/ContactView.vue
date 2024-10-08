<template>
  <main class="flex flex-col items-center max-w-5xl">
    <h1>Contact</h1>
    <div>
      <form class="flex flex-col" @submit.prevent="submitForm">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          v-model="contactData.name"
          placeholder="Votre nom"
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="contactData.email"
          placeholder="Votre email"
        />
        <AutoCompleteSelect />
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="contactData.message"
          placeholder="Votre message"
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <TableComponent :options="tableContent" />
  </main>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from "@/components/TableComponent.vue";

import AutoCompleteSelect from "../components/AutocompleteSelectComponent.vue";

const contactData = ref({
  name: "",
  email: "",
  message: "",
});

const tableContent = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 24,
    isActive: true,
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    age: 45,
    isActive: true,
  },
  {
    id: 5,
    name: "Charlie Black",
    email: "charlie.black@example.com",
    age: 30,
    isActive: false,
  },
  {
    id: 6,
    name: "David White",
    email: "david.white@example.com",
    age: 27,
    isActive: true,
  },
  {
    id: 7,
    name: "Emma Green",
    email: "emma.green@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 8,
    name: "Frank Harris",
    email: "frank.harris@example.com",
    age: 40,
    isActive: false,
  },
  {
    id: 9,
    name: "Grace Hall",
    email: "grace.hall@example.com",
    age: 29,
    isActive: true,
  },
  {
    id: 10,
    name: "Hannah Lewis",
    email: "hannah.lewis@example.com",
    age: 33,
    isActive: true,
  },
];

const isSend = ref(false);

const submitForm = () => {
  isSend.value = true;
  // console.log(contactData.value);
};
</script>
