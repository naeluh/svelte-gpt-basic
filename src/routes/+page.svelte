<script>
	export let data;
	console.log(data);
</script>

<h1>cat data</h1>
<!-- Now we can run an each loop to display the data. -->
<ul>
	{#each data.props.cats.data as d}
		<div class="character-tile">
			<h3>{d.user}</h3>
			<p><strong>Text:</strong> {d.text}</p>
			<p><strong>Created On:</strong> {d.createdAt}</p>
		</div>
	{/each}
</ul>
