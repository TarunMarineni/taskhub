<template>
  <div class="px-4 py-6 w-[400px] bg-gray-500">
    <div class="">
      <FormKit
        type="form"
        :actions="false"
        :classes="{
          input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
            outer: 'mb-4',
            message: 'text-sm text-red-600'
        }"
      >
        <FormKit
          type="text"
          label="Title"
          :classes="{
            input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
              outer: 'mb-4',
              message: 'text-sm text-red-600'
          }"
        />
        <FormKit
          type="textarea"
          label="Description"
          rows="10"
          :classes="{
            input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
              outer: 'mb-4',
              message: 'text-sm text-red-600'
          }"
        />
        <FormKit
          type="date"
          label="End Date"
          :classes="{
            input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
              outer: 'mb-4',
              message: 'text-sm text-red-600'
          }"
        />
        <FormKit 
          type="submit"
          name="sumbit"
          value="submit"
          label="submit"
          :config="{
            classes:{
              input: 'w-full -auto bg-black text-center p-3 text-white mb-4 rounded-sm uppercase',
            }
          }"
        />
      </FormKit>
    </div>
  </div>
</template>