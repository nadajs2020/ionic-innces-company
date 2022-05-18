<template>
  <div class="container" id="wrap">
    <div class="fa-menu-list">
      <ul class="list-group main_menu">
        <li class="list-group-item my-main">
          <a href="UserStatus" class="fa-my-anchor">
            <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
            <strong>العضويات</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="AdsCpanel" class="fa-my-anchor">
            <span class="glyphicon glyphicon-bullhorn"></span>&nbsp;&nbsp;
            <strong>طلبات الترويج</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="PremiumCpanel" class="fa-my-anchor">
            <span class="glyphicon glyphicon-star"></span>&nbsp;&nbsp;
            <strong>طلبات التمييز</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="AdsMessages" class="fa-my-anchor">
            <span class="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;
            <strong>رسائل الاعلانات</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="ComplainCpanel" class="fa-my-anchor">
            <span class="glyphicon glyphicon-exclamation-sign"></span
            >&nbsp;&nbsp;
            <strong>الشكاوى</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="WaitingRequest" class="fa-my-anchor">
            <span class="glyphicon glyphicon-transfer"></span>&nbsp;&nbsp;
            <strong>قائمة الانتظار</strong>
          </a>
        </li>
        <li class="list-group-item my-main">
          <a href="RulesMn" class="fa-my-anchor">
            <span class="glyphicon glyphicon-book"></span>&nbsp;&nbsp;
            <strong>الشروط والاحكام</strong>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div class="fa-menu-img">
      <img src="../imgs/logo.jpg" class="img-responsible" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexMn",
  components: {
    //
  },
  methods: {
    //import $
    // load_menu() {
    //   $(".main_menu").load("menu.html");
    // },
  },
});
</script>

<style scoped>
/*  */
</style>
