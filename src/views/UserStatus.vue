<template>
  <div class="container" id="wrap">
    <div class="col-sm-12">
      <div class="fa-form-template">
        <form method="post" class="form-horizontal" dir="rtl">
          <div class="fa-my-navbar">
            <div class="form-group fa-template-formgroup">
              <label class="fa-complain-title">العضويات</label>
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
          <br />
          <div class="form-group">
            <label>اسم المستخدم </label>
            <br />
            <input type="text" class="form-control" />
          </div>
          &nbsp;
          <div class="form-group">
            <label>نوع العضوية </label>
            <br />
            <select class="form-control">
              <option>بدون تحديد</option>
              <option>شركة تجارية</option>
              <option>خدمات خاصة</option>
              <option>موظف</option>
              <option>عادية</option>
            </select>
          </div>
          &nbsp;
          <div class="form-group">
            <label>الدفع</label>
            <br />
            <select class="form-control">
              <option>بدون تحديد</option>
              <option>لم يقم بالدفع</option>
              <option>قام بالدفع</option>
            </select>
          </div>

          <div class="form-group">
            <label>دفع نشط</label>
            <br />
            <select class="form-control">
              <option>بدون تحديد</option>
              <option>دفع ونشط</option>
              <option>دفع ولم ينشط</option>
            </select>
          </div>
          &nbsp;
          <div class="form-group">
            <label>حالة الحذف</label>
            <br />
            <select class="form-control">
              <option>بدون تحديد</option>
              <option>محذوف</option>
              <option>غير محذوف</option>
            </select>
          </div>
          &nbsp;
          <div class="form-group">
            <label>من</label>
            <br />
            <input type="date" class="form-control" />
          </div>
          <div class="form-group">
            <label>الي</label>
            <br />
            <input type="date" class="form-control" />
          </div>
          &nbsp;
          <br />
          <div class="form-group">
            <button class="btn btn-primary" type="submit">عرض</button>
          </div>
          <hr />
        </form>
        <div class="fa-my_page_table">
          <table class="table table-striped table-bordered">
            <tr>
              <th>م</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Membership</th>
              <th>Country</th>
              <th>Deleted</th>
              <th>Activated</th>
              <th>Paid</th>
              <th>Paid Active</th>
            </tr>
            <tr>
              <td>1</td>
              <td>0102929458585</td>
              <td>male</td>
              <td>شركة تجارية</td>
              <td>مصر</td>
              <td>
                <form class="form-horizontal" method="post">
                  <div class="form-group">
                    <select>
                      <option>نشط</option>
                      <option>موقوف</option>
                      <option>محذوف</option>
                    </select>
                  </div>
                </form>
              </td>
              <td>---</td>
              <td>
                <a href="" type="submit" class="btn btn-success">تم الدفع</a>
              </td>
              <td>
                <a href="" type="submit" class="btn btn-info">تم التنشيط</a>
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
  name: "UserStatus",
  components: {},
});
</script>

<style scoped>
/*  */
</style>
