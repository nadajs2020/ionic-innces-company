<template>
  <div class="container" id="wrap">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form method="post" class="form-horizontal" dir="rtl">
          <div class="fa-my-navbar">
            <div class="form-group fa-template-formgroup">
              <label class="fa-complain-title">قائمة الانتظار</label>
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
          <div class="form-group">
            <label>نوع الخدمة</label>
            <br />
            <select class="form-control">
              <option>-- اختر نوع الخدمة --</option>
              <option>سفري</option>
              <option>خبيري</option>
              <option>شريكي</option>
            </select>
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
              <th>تاريخ التقديم</th>
              <th>نوع الخدمة</th>
              <th>عرض الملف الشخصي للمتقدم</th>
              <th>تعديل</th>
              <th>حذف</th>
            </tr>
            <tr>
              <td>1</td>
              <td>24-3-2019</td>
              <td>سفري</td>
              <td>
                <a type="submit" class="btn btn-success">عرض الملف الشخصي</a>
              </td>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WaitingRequest",
  components: {},
});
</script>

<style scoped>
/*  */
</style>
