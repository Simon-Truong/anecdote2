<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col cols="4">
        <div>
          <nav class="mb-2 flex justify-end">
            <ul>
              <li v-for="item in guestNav" :key="item.name">
                <nuxt-link class="text-gray-600 hover:underline font-medium" :to="item.link"> {{ item.name }} </nuxt-link>
              </li>
            </ul>
          </nav>

          <v-card>
            <v-toolbar flat dense>
              <v-toolbar-title>anecdote</v-toolbar-title>
            </v-toolbar>

            <nuxt />
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavItems from '../models/nav-items.model';

@Component
export default class DefaultTemplate extends Vue {
  guestNav: NavItems[] = [
    {
      name: 'all',
      link: 'browse',
    },
    {
      name: 'login/signup',
      link: 'login',
    },
  ];
}
</script>

<style scoped lang="scss">
nav li + li:before {
  content: '|';
  color: #4a5568;
}

ul > li {
  display: inline;
}
</style>
