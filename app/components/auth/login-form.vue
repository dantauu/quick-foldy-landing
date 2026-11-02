<script setup lang="ts">

import {useForm, Field as VeeField} from "vee-validate";
import {loginSchema} from "~/schema/auth.ts";
import {toTypedSchema} from "@vee-validate/zod";

const { login } = useAuth()

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: '',
    password: '',
  }
})

const handleLogin = async () => {
  login()
  navigateTo('/profile')
}

const submit = handleSubmit((data) => {
  console.log('dataLogin:', data)
  handleLogin()
})
</script>
<template>
  <form id="login-form" @submit="submit">
    <div class="flex flex-col gap-5">
      <VeeField v-slot="{ componentField, errors }" name="email">
        <BaseField :error="errors[0]" v-bind="componentField"  label="Почта" placeholder="you@example.com" />
      </VeeField>
      <VeeField v-slot="{ componentField, errors }" name="password">
        <BaseField v-bind="componentField" :error="errors[0]" label="Пароль">
          <template #label-action>
            <a class="text-sm text-folder-blue">Забыли пароль?</a>
          </template>
        </BaseField>
      </VeeField>
    </div>
    <BaseButton class="mt-5 w-full" type="submit" variant="primary" size="lg"> Войти </BaseButton>
  </form>
</template>
