<template>
    <div>
        <nav class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow">
            <slot name="cabecera"></slot>
        </nav>

        <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mr-auto"><a class="navbar-brand" href="#"><span class="material-icons">home</span>
                            <h2 class="brand-text">NetBank</h2>
                        </a></li>
                    <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc" data-ticon="disc"></i></a></li>
                </ul>
            </div>
            <div class="shadow-bottom"></div>
            <div class="main-menu-content">
                <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    <li class=" nav-item"><a class="d-flex align-items-center" href="javascript:;"><i class="material-icons">save</i><span class="menu-title text-truncate" style="font-size: 0.8em !important" data-i18n="Menuasdas Levels" >Modulo 1</span></a>
                        <ul class="menu-content">
                            <li><a class="d-flex align-items-center" href="javascript:;"><i class="material-icons">panorama_fish_eye</i><span class="menu-item text-truncate" style="font-size: 0.8em !important" data-i18n="Second Level">Submodulo 1</span></a>
                                <ul class="menu-content">
                                    <li>
                                        <inertia-link href="/programa" class="d-flex align-items-center">
                                            <span class="menu-item text-truncate" style="font-size: 0.8em !important"  data-i18n="Third Level">parte 1</span>
                                        </inertia-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
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
export default {
	name: "DashboardTemplate",
	components: {
        Loading
    },
    data() {
        return {
            
        }
    },
    methods: {
        renderizar: function() {
            this.$store.state.fullscreenLoading = !this.$store.state.fullscreenLoading;
            this.$store.state.errors = [];
        }
    },
    mounted() {
        
    }
};
</script>