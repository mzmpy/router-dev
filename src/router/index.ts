import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    props: true,
    // components的每个值对应一个命名router-view
    components: {
      // 无命名的为default
      default: () =>
        import(/* webpackChunkName: "user" */ "../views/User/User.vue"),
      leftView: () => import("../views/User/Sider/leftView.vue"),
      rightView: () => import("../views/User/Sider/rightView.vue"),
    },
    children: [
      {
        path: "profile",
        name: "Profile",
        // props为对象或函数时，对象或者函数的返回值将被传递给props
        props: (route) => ({
          msg: route.name,
        }),
        component: () => import("../views/User/Subview/Profile.vue"),
      },
      {
        path: "post",
        name: "Post",
        props: (route) => ({
          msg: route.name,
        }),
        component: () => import("../views/User/Subview/Post.vue"),
      },
    ],
  },
  {
    path: "/step/:nid",
    name: "Step",
    // props为boolean时，route.params将被传递给props
    props: true,
    component: () => import("../views/Step.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
