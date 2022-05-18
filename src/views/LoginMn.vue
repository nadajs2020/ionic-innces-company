<template>
  <div class="container" id="wrap" style="margin-top: 30px">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form class="form-horizontal">
          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" class="form-control" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-info">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginMn",
  components: {},
});
</script>

<style scoped>
/*  */
</style>
