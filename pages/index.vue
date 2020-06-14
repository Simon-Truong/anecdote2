<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" />

      <v-col cols="6">
        <v-card>
          <v-toolbar dense>
            <v-toolbar-title>anecdote</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
        </v-card>
      </v-col>

      <v-col cols="3" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class YourComponent extends Vue {}
</script>

<style scoped></style>
