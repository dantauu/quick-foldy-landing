<script setup lang="ts">
const { mode, switchMode } = useAuthModal()

const tabs = [
  { value: 'login', label: 'Вход' },
  { value: 'register', label: 'Регистрация' },
] as const
</script>

<template>
  <div class="w-[450px] h-fit border border-line rounded-[20px] p-8">
    <div class="flex flex-col gap-5 justify-between h-full">
      <AppLogo />
      <p v-if="mode === 'login'" class="text-[25px]">Велком!</p>
      <p v-else-if="mode === 'register'" class="text-[25px]">Создать аккаунт</p>
      <div
        role="tablist"
        class="grid grid-cols-2 border border-line rounded-[12px] bg-[#0e0f11] p-1"
      >
        <button
          v-for="tab in tabs"
          :key="tab.value"
          role="tab"
          :aria-selected="mode === tab.value"
          class="h-11 cursor-pointer rounded-lg font-semibold transition-colors"
          :class="mode === tab.value ? 'bg-line text-fg' : 'text-muted hover:text-fg'"
          @click="switchMode(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
      <AuthLoginForm v-if="mode === 'login'" />
      <AuthRegisterForm v-if="mode === 'register'" />
    </div>
  </div>
</template>
