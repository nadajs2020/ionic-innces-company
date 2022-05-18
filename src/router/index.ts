import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import AdsCpanel from "../views/AdsCpanel.vue";
import ComplainCpanel from "../views/ComplainCpanel.vue";
import IndexMn from "../views/IndexMn.vue";
import LoginMn from "../views/LoginMn.vue";
import PremiumCpanel from "../views/PremiumCpanel.vue";
import RulesMn from "../views/RulesMn.vue";
import UserStatus from "../views/UserStatus.vue";
import WaitingRequest from "../views/WaitingRequest.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/AdsCpanel",
    name: "AdsCpanel",
    component: AdsCpanel,
  },
  {
    path: "/ComplainCpanel",
    name: "ComplainCpanel",
    component: ComplainCpanel,
  },
  {
    path: "/IndexMn",
    name: "IndexMn",
    component: IndexMn,
  },
  {
    path: "/LoginMn",
    name: "LoginMn",
    component: LoginMn,
  },
  {
    path: "/PremiumCpanel",
    name: "PremiumCpanel",
    component: PremiumCpanel,
  },
  {
    path: "/RulesMn",
    name: "RulesMn",
    component: RulesMn,
  },
  {
    path: "/UserStatus",
    name: "UserStatus",
    component: UserStatus,
  },
  {
    path: "/WaitingRequest",
    name: "WaitingRequest",
    component: WaitingRequest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
