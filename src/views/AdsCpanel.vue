<template>
  <!-- <header-nav> -->
  <div class="container" id="wrap">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form method="post" class="form-horizontal" dir="rtl">
          <div class="fa-my-navbar">
            <div class="form-group fa-template-formgroup">
              <label class="fa-complain-title">الترويج</label>
            </div>
            <div class="fa-back-button">
              <a href="IndexMn">
                <img src="../imgs/back-button.png" class="img-responsive" />
              </a>
            </div>
          </div>
        </form>
        <form method="post" class="form-inline fa-second-form" dir="rtl">
          <br />
          <div class="form-group">
            <label>من </label>
            <br />
            <input type="date" class="form-control" />
          </div>
          &nbsp;
          <div class="form-group">
            <label>الي </label>
            <br />
            <input type="date" class="form-control" />
          </div>
          &nbsp;
          <div class="form-group fa-submit-button">
            <button
              class="btn btn-success"
              style="display: block; margin-top: 10px"
              type="submit"
            >
              عرض
            </button>
          </div>
          <hr />
        </form>
        <div class="fa-my_page_table">
          <table class="table table-striped table-bordered">
            <tr>
              <th>م</th>
              <th>كود الترويج</th>
              <th>اسم المستخدم</th>
              <th>تفاصيل الترويج</th>
              <th>تعديل</th>
              <th>حذف</th>
            </tr>
            <tr>
              <td>1</td>
              <td>58584</td>
              <td>محمد</td>
              <td>- تفاصيل -</td>
              <td>
                <a type="submit" class="btn btn-warning">تعديل</a>
              </td>
              <td>
                <a type="submit" class="btn btn-danger">حذف</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- </header-nav> -->
</template>

<script lang="ts">
// import HeaderNav from "@/components/HeaderNav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdsCpanel",
  components: {
    // HeaderNav,
  },
});
</script>

<style scoped>
/*  */
</style>
