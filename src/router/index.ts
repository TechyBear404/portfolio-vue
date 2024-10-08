import {
  createRouter,
  createWebHistory,
  type RouteMap,
  type RouteMeta,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CuriculumVitaeView from "@/views/CuriculumVitaeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
        description: "Welcome to my personal website",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "About",
        description: "About me",
      },
    },
    {
      path: "/cv",
      name: "cv",
      component: CuriculumVitaeView,
      meta: {
        title: "CV",
        description: "Curiculum Vitae",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: {
        title: "Contact",
        description: "Contact me",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const meta = to.meta;
  document.title = (meta.title as string) || "Default Title";

  const description = (meta.description as string) || "Default Description";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  next();
});

export default router;
