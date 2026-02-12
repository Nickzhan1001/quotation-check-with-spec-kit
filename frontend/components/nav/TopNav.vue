<template>
  <header class="sticky top-0 z-10 flex items-center justify-between gap-4 bg-slate-900 px-5 py-3 text-slate-50">
    <nav class="flex gap-3">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="rounded-lg px-3 py-1.5 transition-colors hover:bg-slate-700/60"
        active-class="bg-slate-100/20"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <button type="button" class="rounded-lg border border-slate-100/40 px-3 py-1.5 text-sm">登出</button>
  </header>
</template>

<script setup lang="ts">
type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: '即時公告', to: '/announcements' },
  { label: '出貨作業', to: '/shipping' },
  { label: '收貨作業', to: '/receiving' },
  { label: '退貨作業', to: '/returns' },
]
</script>
