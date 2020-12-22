<template>
  <div>
    <div v-if="searchType === 'employer'">
      {{ item }}
      <span style="opacity: 0.3;color:grey"
        >- {{ item.Jobs | jobsLength }}
      </span>
    </div>
    <div v-if="searchType === 'jobs'">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardResult",
  props: {
    searchType: null,
    item: null,
  },
  data() {
    return {};
  },
  filters: {
    jobsLength: (value) => {
      return Object.keys(value).length;
    },
  },
};
</script>
