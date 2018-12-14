<template>
  <div class="home">
    <div class="column is-4">
      <div  class="card">
        <div class="card-image">
          <img src="img/spinach.png" width="200">
        </div>
        <div class="card-content has-background-light">
          <p class="title is-4">農業シミュレーション</p>
          <p class="multiline">40年間農場を経営するゲーム</p>
        </div>
        <footer class="card-footer has-background-light">
          <router-link to="agriculture" class="card-footer-item">はじめる</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
