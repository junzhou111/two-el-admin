import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home"),
    children: [
      {
        // 机构管理
        path: "/department",
        name: "department",
        component: () => import("../views/management/department"),
      },
      {
        // 用户管理
        path: "/userList",
        name: "userList",
        component: () => import("../views/management/userList"),
      },
      {
        // 角色管理
        path: "/roleList",
        name: "roleList",
        component: () => import("../views/management/roleList"),
      },
      {
        // 权限管理
        path: "/menuList",
        name: "menuList",
        component: () => import("../views/management/menuList"),
      },
      {
        // 分类管理
        path: "/goodCategory",
        name: "goodCategory",
        component: () => import("../views/Commodity/goodCategory"),
      },
      {
        // 日志管理
        path: "/systemCode",
        name: "systemCode",
        component: () => import("../views/SystemTools/systemCode"),
      },
      {
        // 接口文档
        path: "/document",
        name: "document",
        component: () => import("../views/SystemTools/document"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
