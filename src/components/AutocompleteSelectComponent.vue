<template>
  <div class="flex flex-col">
    <label for="selectAuto"> Sélectionnez une option </label>
    <input
      id="selectAuto"
      type="text"
      v-model="inputValue"
      @input="filterOptions($event)"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      autocomplete="off"
    />
    <ul v-if="inputFocus">
      <li
        v-for="option in selectOptions"
        :key="option.id"
        @click="inputValue = option.name"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const inputFocus = ref(false);

const options = [
  { id: 1, name: "Afghanistan" },
  { id: 2, name: "Albania" },
  { id: 3, name: "Algeria" },
  { id: 4, name: "Andorra" },
  { id: 5, name: "Angola" },
  { id: 6, name: "Antigua and Barbuda" },
  { id: 7, name: "Argentina" },
  { id: 8, name: "Armenia" },
  { id: 9, name: "Australia" },
  { id: 10, name: "Austria" },
  { id: 11, name: "Azerbaijan" },
  { id: 12, name: "Bahamas" },
  { id: 13, name: "Bahrain" },
  { id: 14, name: "Bangladesh" },
  { id: 15, name: "Barbados" },
  { id: 16, name: "Belarus" },
  { id: 17, name: "Belgium" },
  { id: 18, name: "Belize" },
  { id: 19, name: "Benin" },
  { id: 20, name: "Bhutan" },
  { id: 21, name: "Bolivia" },
  { id: 22, name: "Bosnia and Herzegovina" },
  { id: 23, name: "Botswana" },
  { id: 24, name: "Brazil" },
  { id: 25, name: "Brunei" },
  { id: 26, name: "Bulgaria" },
  { id: 27, name: "Burkina Faso" },
  { id: 28, name: "Burundi" },
  { id: 29, name: "Cabo Verde" },
  { id: 30, name: "Cambodia" },
  { id: 31, name: "Cameroon" },
  { id: 32, name: "Canada" },
  { id: 33, name: "Central African Republic" },
  { id: 34, name: "Chad" },
  { id: 35, name: "Chile" },
  { id: 36, name: "China" },
  { id: 37, name: "Colombia" },
  { id: 38, name: "Comoros" },
  { id: 39, name: "Congo (Congo-Brazzaville)" },
  { id: 40, name: "Congo (Democratic Republic)" },
  { id: 41, name: "Costa Rica" },
  { id: 42, name: "Croatia" },
  { id: 43, name: "Cuba" },
  { id: 44, name: "Cyprus" },
  { id: 45, name: "Czech Republic" },
  { id: 46, name: "Denmark" },
  { id: 47, name: "Djibouti" },
  { id: 48, name: "Dominica" },
  { id: 49, name: "Dominican Republic" },
  { id: 50, name: "East Timor" },
  { id: 51, name: "Ecuador" },
  { id: 52, name: "Egypt" },
  { id: 53, name: "El Salvador" },
  { id: 54, name: "Equatorial Guinea" },
  { id: 55, name: "Eritrea" },
  { id: 56, name: "Estonia" },
  { id: 57, name: "Eswatini" },
  { id: 58, name: "Ethiopia" },
  { id: 59, name: "Fiji" },
  { id: 60, name: "Finland" },
  { id: 61, name: "France" },
  { id: 62, name: "Gabon" },
  { id: 63, name: "Gambia" },
  { id: 64, name: "Georgia" },
  { id: 65, name: "Germany" },
  { id: 66, name: "Ghana" },
  { id: 67, name: "Greece" },
  { id: 68, name: "Grenada" },
  { id: 69, name: "Guatemala" },
  { id: 70, name: "Guinea" },
  { id: 71, name: "Guinea-Bissau" },
  { id: 72, name: "Guyana" },
  { id: 73, name: "Haiti" },
  { id: 74, name: "Honduras" },
  { id: 75, name: "Hungary" },
  { id: 76, name: "Iceland" },
  { id: 77, name: "India" },
  { id: 78, name: "Indonesia" },
  { id: 79, name: "Iran" },
  { id: 80, name: "Iraq" },
  { id: 81, name: "Ireland" },
  { id: 82, name: "Israel" },
  { id: 83, name: "Italy" },
  { id: 84, name: "Ivory Coast" },
  { id: 85, name: "Jamaica" },
  { id: 86, name: "Japan" },
  { id: 87, name: "Jordan" },
  { id: 88, name: "Kazakhstan" },
  { id: 89, name: "Kenya" },
  { id: 90, name: "Kiribati" },
  { id: 91, name: "Kuwait" },
  { id: 92, name: "Kyrgyzstan" },
  { id: 93, name: "Laos" },
  { id: 94, name: "Latvia" },
  { id: 95, name: "Lebanon" },
  { id: 96, name: "Lesotho" },
  { id: 97, name: "Liberia" },
  { id: 98, name: "Libya" },
  { id: 99, name: "Liechtenstein" },
  { id: 100, name: "Lithuania" },
  { id: 101, name: "Luxembourg" },
  { id: 102, name: "Madagascar" },
  { id: 103, name: "Malawi" },
  { id: 104, name: "Malaysia" },
  { id: 105, name: "Maldives" },
  { id: 106, name: "Mali" },
  { id: 107, name: "Malta" },
  { id: 108, name: "Marshall Islands" },
  { id: 109, name: "Mauritania" },
  { id: 110, name: "Mauritius" },
  { id: 111, name: "Mexico" },
  { id: 112, name: "Micronesia" },
  { id: 113, name: "Moldova" },
  { id: 114, name: "Monaco" },
  { id: 115, name: "Mongolia" },
  { id: 116, name: "Montenegro" },
  { id: 117, name: "Morocco" },
  { id: 118, name: "Mozambique" },
  { id: 119, name: "Myanmar" },
  { id: 120, name: "Namibia" },
  { id: 121, name: "Nauru" },
  { id: 122, name: "Nepal" },
  { id: 123, name: "Netherlands" },
  { id: 124, name: "New Zealand" },
  { id: 125, name: "Nicaragua" },
  { id: 126, name: "Niger" },
  { id: 127, name: "Nigeria" },
  { id: 128, name: "North Korea" },
  { id: 129, name: "North Macedonia" },
  { id: 130, name: "Norway" },
  { id: 131, name: "Oman" },
  { id: 132, name: "Pakistan" },
  { id: 133, name: "Palau" },
  { id: 134, name: "Panama" },
  { id: 135, name: "Papua New Guinea" },
  { id: 136, name: "Paraguay" },
  { id: 137, name: "Peru" },
  { id: 138, name: "Philippines" },
  { id: 139, name: "Poland" },
  { id: 140, name: "Portugal" },
  { id: 141, name: "Qatar" },
  { id: 142, name: "Romania" },
  { id: 143, name: "Russia" },
  { id: 144, name: "Rwanda" },
  { id: 145, name: "Saint Kitts and Nevis" },
  { id: 146, name: "Saint Lucia" },
  { id: 147, name: "Saint Vincent and the Grenadines" },
  { id: 148, name: "Samoa" },
  { id: 149, name: "San Marino" },
  { id: 150, name: "Sao Tome and Principe" },
  { id: 151, name: "Saudi Arabia" },
  { id: 152, name: "Senegal" },
  { id: 153, name: "Serbia" },
  { id: 154, name: "Seychelles" },
  { id: 155, name: "Sierra Leone" },
  { id: 156, name: "Singapore" },
  { id: 157, name: "Slovakia" },
  { id: 158, name: "Slovenia" },
  { id: 159, name: "Solomon Islands" },
  { id: 160, name: "Somalia" },
  { id: 161, name: "South Africa" },
  { id: 162, name: "South Korea" },
  { id: 163, name: "South Sudan" },
  { id: 164, name: "Spain" },
  { id: 165, name: "Sri Lanka" },
  { id: 166, name: "Sudan" },
  { id: 167, name: "Suriname" },
  { id: 168, name: "Sweden" },
  { id: 169, name: "Switzerland" },
  { id: 170, name: "Syria" },
  { id: 171, name: "Taiwan" },
  { id: 172, name: "Tajikistan" },
  { id: 173, name: "Tanzania" },
  { id: 174, name: "Thailand" },
  { id: 175, name: "Togo" },
  { id: 176, name: "Tonga" },
  { id: 177, name: "Trinidad and Tobago" },
  { id: 178, name: "Tunisia" },
  { id: 179, name: "Turkey" },
  { id: 180, name: "Turkmenistan" },
  { id: 181, name: "Tuvalu" },
  { id: 182, name: "Uganda" },
  { id: 183, name: "Ukraine" },
  { id: 184, name: "United Arab Emirates" },
  { id: 185, name: "United Kingdom" },
  { id: 186, name: "United States" },
  { id: 187, name: "Uruguay" },
  { id: 188, name: "Uzbekistan" },
  { id: 189, name: "Vanuatu" },
  { id: 190, name: "Vatican City" },
  { id: 191, name: "Venezuela" },
  { id: 192, name: "Vietnam" },
  { id: 193, name: "Yemen" },
  { id: 194, name: "Zambia" },
  { id: 195, name: "Zimbabwe" },
];
let selectOptions = ref([]);

const filterOptions = (event) => {
  if (inputValue.value === null || inputValue.value === "") {
    selectOptions.value = options.filter((option) => {
      return option.name;
    });
  }

  selectOptions.value = options
    .filter((option) => {
      return option.name.toLowerCase().includes(inputValue.value.toLowerCase());
    })
    .slice(0, 5);

  if (selectOptions.value.length === 0) {
    selectOptions.value.push({ id: 0, name: "Pas de resultat trouvé" });
  }
};
filterOptions({ target: { value: "" } });
</script>
