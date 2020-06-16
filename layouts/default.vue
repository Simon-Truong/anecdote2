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

          <nuxt />
        </v-card>
      </v-col>

      <v-col cols="3" />
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
