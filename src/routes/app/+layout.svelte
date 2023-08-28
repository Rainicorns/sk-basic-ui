<script lang="ts">
	import App from '$lib/ui/shells/App.svelte';
	import type { MenuItem } from '$lib/ui/shells/MenuItem.js';

	const menu: MenuItem[] = [
		{ label: 'Dashboard', uri: '/app' },
		{ label: 'Patients', uri: '/app/patients' },
		{ label: 'Cases', uri: '/app/cases' },
		{ label: 'Calendar', uri: '/app/calendar' },
		{ label: 'Documents', uri: '/app/documents' },
		{ label: 'Reports', uri: '/app/reports' },
		{ label: 'Treatment Catalog', uri: '/app/catalog' }
	];
</script>

<App {menu}><slot /></App>
