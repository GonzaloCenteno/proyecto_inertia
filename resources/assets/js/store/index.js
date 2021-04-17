import createPersistedState from 'vuex-persistedstate';
export default {
	plugins: [createPersistedState()],
	state: {
		fullscreenLoading: true,
		processing: false,
		errors: [],
		showModal: false,
		mostrarModal: {
			display: 'block',
			background: '#0000006b'
		},
		ocultarModal: {
			display: 'none'
		}
		// modulos: []
	},
	mutations: {
		// getModulos(state, data){
		// 	state.modulos = data;
		// }
		setMenuStatus(state){
			state.fullscreenLoading = !state.fullscreenLoading ;
		}
	},
	actions: {
		// setModulos({ commit }) {
		// 	axios.get(`/menu`).then( rspta => {
		// 		commit('getModulos', rspta.data);
		// 	}).catch( error => {
		// 		console.log(error);
		// 		console.log('Algo salio mal');
		// 	});
		// }
		setMenuStatus({commit}) {
			commit('setMenuStatus')
		},
	},
	getters: {
		menuStatus: (state) => {
		  return state.fullscreenLoading;
		},
	}
}