<template>
  <div>
    <h1 class="mb-[1rem] text-white text-[1.5rem] font-bold">
      <slot name="title"></slot>
    </h1>
    <p class="text-light-gray text-[.875rem]">
      <slot name="content"></slot>
    </p>
  </div>
</template>