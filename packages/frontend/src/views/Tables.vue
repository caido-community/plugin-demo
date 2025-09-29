<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { ref } from "vue";

// Generate large dataset for virtual scrolling demonstration
const generateRequests = () => {
  const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  const endpoints = [
    "/api/users",
    "/api/auth/login",
    "/api/products",
    "/api/orders",
    "/api/categories",
    "/api/inventory",
    "/api/reports",
    "/api/settings",
    "/api/notifications",
    "/api/analytics",
    "/api/backup",
    "/api/health",
  ];
  const statusCodes = [
    200, 201, 204, 301, 302, 400, 401, 403, 404, 422, 500, 502, 503,
  ];
  const requests = [];

  for (let i = 1; i <= 100; i++) {
    const method = methods[Math.floor(Math.random() * methods.length)];
    const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
    const status = statusCodes[Math.floor(Math.random() * statusCodes.length)];
    const time = (Math.random() * 5 + 0.1).toFixed(1) + "s";
    const size = (Math.random() * 10 + 0.1).toFixed(1) + "KB";

    requests.push({
      id: i,
      method,
      url: `https://api.example.com${endpoint}${i > 1000 ? `/${i}` : ""}`,
      status,
      time,
      size,
    });
  }

  return requests;
};

const requests = ref(generateRequests());
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-2xl font-semibold text-surface-100 mb-2">
        HTTP Requests
      </h2>
      <p class="text-surface-400">View and analyze captured HTTP requests</p>
    </div>

    <div>
      <DataTable
        :value="requests"
        scrollable
        scroll-height="400px"
        table-style="min-width: 50rem"
      >
        <Column
          field="id"
          header="Id"
          style="width: 20%; height: 44px"
        ></Column>
        <Column
          field="method"
          header="Method"
          style="width: 20%; height: 44px"
        ></Column>
        <Column
          field="url"
          header="URL"
          style="width: 20%; height: 44px"
        ></Column>
        <Column
          field="status"
          header="Status"
          style="width: 20%; height: 44px"
        ></Column>
        <Column
          field="time"
          header="Time"
          style="width: 20%; height: 44px"
        ></Column>
        <Column
          field="size"
          header="Size"
          style="width: 20%; height: 44px"
        ></Column>
      </DataTable>
    </div>
  </div>
</template>
