<template>
  <nav class="mb-2 mr-5 flex justify-end">
    <ul>
      <li v-for="item in guestNav" :key="item.name">
        <nuxt-link class="text-gray-600 hover:underline font-medium" :to="item.link"> {{ item.name }} </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavItems from '../models/nav-items.model';

@Component
export default class Navigation extends Vue {
  guestNav: NavItems[] = [
    {
      name: 'all',
      link: 'browse',
    },
    {
      name: 'explore',
      link: 'browse',
    },
    {
      name: 'login/signup',
      link: 'login',
    },
  ];
}
</script>

<style lang="scss" scoped>
nav li + li:before {
  content: '|';
  color: #4a5568;
}

ul > li {
  display: inline;
}
</style>
