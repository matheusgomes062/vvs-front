<script setup lang="ts">
const email: string = $ref('')
const password: string = $ref('')

const { t } = useI18n()

const login = () => {
  // eslint-disable-next-line no-console
  console.log('log gin')
}
</script>

<template>
  <title>TheWiseDev - Log in</title>
  <div>
    <div text-4xl>
      <div class="accent-color" i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        VVS_FRONT
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <div flex flex-col items-center>
      <input
        v-model="email"
        class="user_email"
        :placeholder="t('login.email')"
        :aria-label="t('login.email')"
        type="text"
        autocomplete="false"
        p="x4 y2"
        m="b2"
        w="250px"
        text="left"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      >
      <input
        v-model="password"
        class="user_password"
        :placeholder="t('login.password')"
        :aria-label="t('login.password')"
        type="password"
        autocomplete="false"
        p="x4 y2"
        w="250px"
        text="left"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      >
      <label class="hidden" for="input">{{ t('login.password') }}</label>
    </div>

    <div>
      <button
        w="250px" btn cursor-pointer m-3 text-sm
        :disabled="!email || !password"
        @click="login()"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
