<template>
  <div class="home">
    <div class="columns">
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
      <div class="column is-4">
        <div  class="card">
          <div class="card-image">
            <img src="" width="200">
          </div>
          <div class="card-content has-background-light">
            <p class="title is-4">石取りゲーム</p>
            <p class="multiline">山から石を取って0にした方が勝ちのゲーム</p>
          </div>
          <footer class="card-footer has-background-light">
            <router-link to="stones" class="card-footer-item">はじめる</router-link>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
