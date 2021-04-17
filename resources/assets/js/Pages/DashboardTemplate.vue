<template>
    <div :class="[fullscreenLoading ? 'vertical-layout vertical-menu-modern  navbar-floating footer-static' : 'vertical-layout vertical-menu-modern navbar-floating footer-static pace-done menu-collapsed']"> 
        <nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
            <slot name="cabecera"></slot>
        </nav>

        <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mr-auto"><a class="navbar-brand" href="#"><span class="material-icons">home</span>
                            <h2 class="brand-text">NetBank</h2>
                        </a>
                    </li>
                    <li class="nav-item nav-toggle">
                        <a data-toggle="collapse" class="nav-link modern-nav-toggle pr-0" v-if="fullscreenLoading"  @click="renderizar">
                            <i data-feather="x" class="d-block d-xl-none text-primary toggle-icon font-medium-4"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc d-none d-xl-block collapse-toggle-icon primary font-medium-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                        </a>
                        <a data-toggle="collapse" class="nav-link modern-nav-toggle pr-0"  @click="renderizar" v-else>
                            <i data-feather="x" class="d-block d-xl-none text-primary toggle-icon font-medium-4"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle d-none d-xl-block collapse-toggle-icon primary font-medium-4"><circle cx="12" cy="12" r="10"></circle></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="shadow-bottom"></div>
            <div class="main-menu-content">
                <ul class="navigation navigation-main mx-1" id="main-menu-navigation" data-menu="menu-navigation">
                   
                    <item-menu title="MODULO 1" icon="save">
                        <inertia-link href="/programa" class="d-flex align-items-center bg-item">
                            <i class="material-icons font10 mx-1">panorama_fish_eye</i>
                            <span class="menu-item text-truncate" style="font-size: 0.8em !important">parte 1</span>
                        </inertia-link>
                        <inertia-link href="/programa" class="d-flex align-items-center bg-item">
                            <i class="material-icons font10 mx-1">panorama_fish_eye</i>
                            <span class="menu-item text-truncate" style="font-size: 0.8em !important">Example 2</span>
                        </inertia-link>
                            <inertia-link href="/programa" class="d-flex align-items-center bg-item">
                            <i class="material-icons font10 mx-1">panorama_fish_eye</i>
                            <span class="menu-item text-truncate" style="font-size: 0.8em !important">Example 3</span>
                        </inertia-link>
                    </item-menu>
                    <item-menu title="MODULO 2" icon="description">
                        <inertia-link href="/programa" class="d-flex align-items-center bg-item">
                            <i class="material-icons font10 mx-1">panorama_fish_eye</i>
                            <span class="menu-item text-truncate" style="font-size: 0.8em !important">MENU EJECUTIVO</span>
                        </inertia-link>
                    </item-menu>
                </ul>
            </div>
        </div>

        <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
            <slot name="main"></slot>
        </div>
        
    </div>
</template>

<script>
import { Loading } from 'element-ui';
import ItemMenu from '../Components/ItemMenu.vue';
import { mapGetters } from 'vuex';

export default {
	name: "DashboardTemplate",
    computed: {
        ...mapGetters({
            fullscreenLoading: 'menuStatus'
        })
    },
	components: {
        Loading,
        ItemMenu
    },
    data() {
        return {
            
        }
    },
    methods: {
        renderizar: function() {
            this.$store.dispatch("setMenuStatus")    
        }
    },
    mounted() {
        
    }
};
</script>
<style >
    .font10{
        font-size: 10px;
    }
    .mb-05{
        margin-bottom: 0.5rem;
    }
    .bg-item:hover{
        background: #f9f9f9;
    }
    .main-menu:hover {
        width: 340px !important;
    }
    .main-menu:hover .menu-title, .main-menu:hover .icon-arrow,.main-menu:hover .brand-text,.main-menu:hover .modern-nav-toggle{
        display:block !important;
    }
    .menu-collapsed .menu-title, .menu-collapsed .icon-arrow {
        display: none;
    }
</style>