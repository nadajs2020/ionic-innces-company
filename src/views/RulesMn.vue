<template>
  <div class="container" id="wrap">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form method="post" class="form-horizontal" dir="rtl">
          <div class="fa-my-navbar">
            <div class="form-group fa-template-formgroup">
              <label class="fa-complain-title">الشروط والاحكام</label>
            </div>
            <div class="fa-back-button">
              <a href="IndexMn">
                <img src="imgs/back-button.png" class="img-responsive" />
              </a>
            </div>
          </div>
        </form>
        <form method="post" class="form-inline fa-second-form" dir="rtl">
          <br />
          <br />
          <div class="form-group">
            <label>اضافة الشروط والاحكام </label>
            <br />
            <textarea rows="6" cols="70" class="form-control"></textarea>
          </div>
          <div class="form-group fa-rules-button" style="display: block">
            <button class="btn btn-success" type="submit">حفظ</button>
          </div>
          <hr />
        </form>
        <div class="fa-my_page_table">
          <table class="table table-striped table-bordered">
            <tr>
              <th>م</th>
              <th>التفاصيل</th>
              <th>تعديل</th>
              <th>حذف</th>
            </tr>
            <tr>
              <td>1</td>
              <td>التفاصيل</td>
              <td>
                <a href="" type="submit" class="btn btn-warning">تعديل</a>
              </td>
              <td>
                <a href="" type="submit" class="btn btn-danger">حذف</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RulesMn",
  components: {},
});
</script>

<style scoped>
/*  */
</style>
