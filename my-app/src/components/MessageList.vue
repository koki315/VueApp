<template>
 <div class="message-list">
    <template v-for="(message, index) in importedMessages">
      <Message
        :key="index"
        :name="message.name"
        :date="message.date" />
    </template>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
 components:{
   Message
 },
 props:{
    messages:{
     type:Array,
     required:true
   }
 },
 data(){
   return {
     importedMessages:this.messages
   }
 }
}
  Message
</script>

<style>

</style>