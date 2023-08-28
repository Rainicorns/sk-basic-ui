<script>
	import SimplePageHeading from '$lib/ui/application/headings/SimplePageHeading.svelte';
	import DataTable from '$lib/ui/application/lists/DataTable.svelte';
	import LifeOnEarth from '$lib/ui/util/mockContent/LifeOnEarth.svelte';
</script>

<div class="w-full h-full flex flex-col">
	<SimplePageHeading label="Patients" description="A list of all patients" />
	<DataTable />
</div>
