<template>
  <button class="button" @click="$emit('onClick')">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      required: true,
    },
  },
  onClick: {
    type: Function,
    required: true,
  },
};
</script>

<style>
.button {
  background: red;
  border: none;
  font-size: 18px;
  border-radius: 8px;
  color: white;
  padding: 8px 10px 8px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
}
.button:hover {
  background: rgb(182, 0, 0);
}
</style>
