<script setup lang="ts">
import Card from "primevue/card";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import Tabs from "primevue/tabs";
import { ref } from "vue";

// Import view components
import Tables from "./Tables.vue";
import Components from "./Components.vue";

const activeTab = ref("0");
</script>

<template>
  <div class="h-full">
    <Card class="h-full bg-surface-700">
      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">
              <div class="flex items-center gap-2">
                <i class="fas fa-table"></i>
                <span>Tables</span>
              </div>
            </Tab>
            <Tab value="1">
              <div class="flex items-center gap-2">
                <i class="fas fa-components"></i>
                <span>Components</span>
              </div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <Tables class="h-full" />
            </TabPanel>
            <TabPanel value="1">
              <Components class="h-full" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
</template>
