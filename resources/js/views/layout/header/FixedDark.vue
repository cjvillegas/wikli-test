<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Header" subtitle="Fixed Dark">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Header</b-breadcrumb-item>
          <b-breadcrumb-item active>Fixed - Dark</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          A fixed, dark themed Header.
        </p>
      </base-block>
      <base-block rounded>
        <p class="text-center py-8">...</p>
      </base-block>
      <base-block rounded>
        <p class="text-center py-8">...</p>
      </base-block>
      <base-block rounded>
        <p class="text-center py-8">...</p>
      </base-block>
      <base-block rounded>
        <p class="text-center py-8">...</p>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  created () {
    // Set example settings
    this.$store.commit('header', { mode: 'fixed' })
    this.$store.commit('headerStyle', { mode: 'dark' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('headerStyle', { mode: 'light' })

    next()
  }
}
</script>
