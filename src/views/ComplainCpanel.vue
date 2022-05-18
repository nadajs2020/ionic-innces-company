<template>
  <div class="container" id="wrap">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form method="post" class="form-horizontal" dir="rtl">
          <div class="fa-my-navbar">
            <div class="form-group fa-template-formgroup">
              <label class="fa-complain-title">الشكاوى</label>
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
              <option>-- اختر نوع الخدمة المقدم فيها الشكوى --</option>
              <option>سفري</option>
              <option>خبيري</option>
              <option>شريكي</option>
            </select>
          </div>
          &nbsp;
          <div class="form-group">
            <label>اسم مقدم الشكوى</label>
            <br />
            <input type="text" class="form-control" />
          </div>
          <hr />
          <div class="form-group">
            <label>اسم المقدم ضده</label>
            <br />
            <input type="text" class="form-control" />
          </div>
          &nbsp;
          <div class="form-group">
            <label>رقم الشكوى</label>
            <br />
            <input type="number" class="form-control" />
          </div>
          &nbsp;
          <div class="form-group">
            <br />
            <button class="btn btn-primary" type="submit">عرض</button>
          </div>
          <hr />
        </form>

        <div class="fa-my_page_table">
          <table class="table table-striped table-bordered">
            <tr>
              <th>م</th>
              <th>رقم الشكوى</th>
              <th>الخدمة</th>
              <th>اسم مقدم الشكوى</th>
              <th>نوع مقدم الشكوى</th>
              <th>اسم المقدم ضده</th>
              <th>نوع المقدم ضده</th>
              <th>تفاصيل الشكوى</th>
              <th>حالة الشكوى</th>
            </tr>
            <tr>
              <td>1</td>
              <td>-- 8575 --</td>
              <td>-- سفري --</td>
              <td>-- محمد --</td>
              <td>-- مقدم خدمة --</td>
              <td>-- احمد --</td>
              <td>-- زبون --</td>
              <td>-- لم يقم بدفع المستحق --</td>
              <td>
                <a type="submit" class="btn btn-success">منتهية</a>
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
  name: "ComplainCpanel",
  components: {},
});
</script>

<style scoped>
/*  */
</style>
