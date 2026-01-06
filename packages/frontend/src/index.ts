import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import MySlot from "./components/MySlot.vue";
import MyViewMode from "./components/MyViewMode.vue";
import { SDKPlugin } from "./plugins/sdk";
import "./styles/index.css";
import type { FrontendSDK } from "./types";
import App from "./views/App.vue";

// This is the entry point for the frontend plugin
export const init = (sdk: FrontendSDK) => {
  const app = createApp(App);

  // Load the PrimeVue component library
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  // Provide the FrontendSDK
  app.use(SDKPlugin, sdk);

  // Create the root element for the app
  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  // Set the ID of the root element
  // Replace this with the value of the prefixWrap plugin in caido.config.ts
  // This is necessary to prevent styling conflicts between plugins
  root.id = `plugin--frontend-vue`;

  // Mount the app to the root element
  app.mount(root);

  // Add the page to the navigation
  // Make sure to use a unique name for the page
  sdk.navigation.addPage("/my-plugin", {
    body: root,
  });

  // Add a sidebar item
  sdk.sidebar.registerItem("My Plugin", "/my-plugin");

  // Add a slot to the page
  sdk.filters.addToSlot("create-header", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.filters.addToSlot("update-header", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.scopes.addToSlot("create-header", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.scopes.addToSlot("update-header", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.search.addToSlot("search-toolbar-primary", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.httpHistory.addToSlot("toolbar-primary", {
    type: "Custom",
    definition: {
      component: MySlot,
    },
  });

  sdk.httpHistory.addResponseViewMode({
    label: "My View Mode",
    view: {
      component: MyViewMode,
    },
  });
};
