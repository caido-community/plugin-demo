<script setup lang="ts">
import { ref } from "vue";

const markdownContent = ref(`# Markdown Renderer Example

This is a **markdown** component from \`sdk-components\`.

## Features

- Supports *italic* and **bold** text
- Code blocks with \`backticks\`
- Lists and more!

\`\`\`javascript
const example = "Hello from sdk-components!";
\`\`\`
`);
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-2xl font-semibold text-surface-100 mb-2">
        Components
      </h2>
      <p class="text-surface-400">Using components from sdk-components package</p>
    </div>

    <div class="mb-6">
      <h3 class="text-xl font-semibold text-surface-100 mb-2">
        Markdown Renderer
      </h3>
      <div class="flex gap-4" style="height: 400px;">
        <div class="flex-1">
          <label class="block text-sm text-surface-400 mb-2">Markdown Source</label>
          <textarea
            v-model="markdownContent"
            class="w-full h-full p-4 bg-surface-900 border border-surface-700 rounded-md text-surface-100 font-mono text-sm resize-none focus:outline-none focus:border-secondary-400"
            placeholder="Enter markdown here..."
          />
        </div>
        <div class="flex-1">
          <label class="block text-sm text-surface-400 mb-2">Rendered Output</label>
          <div class="h-full">
            <MarkdownRenderer :markdown="markdownContent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
