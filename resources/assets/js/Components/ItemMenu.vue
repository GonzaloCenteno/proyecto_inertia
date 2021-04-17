<template>
    <div>
        <li class=" nav-item mb-05">
            <div class="d-flex align-items-center p-1 rounded bg-light justify-content-between" @click="onPressItem" >
                <div class="d-flex align-items-center">
                    <i class="material-icons mr-1">{{icon}}</i>
                    <span class="menu-title text-truncate" style="font-size: 0.8em !important">{{title}}</span>
                </div>
                <span class="material-icons icon-arrow"> chevron_right </span>
            </div>
            <ul class="menu-content" v-if="expanded">
                <li>
                    <slot></slot>
                </li>
            </ul>
        </li>
    </div>
</template>
<script>

export default {
  props : {
      icon : String,
      title : String,
  },
  data(){
    return {
        expanded : false
    }
  },
  methods : {
      onPressItem(){
          this.expanded = !this.expanded;
      }
  }
}
</script>
