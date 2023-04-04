<script>
	// @ts-nocheck
	export let data;
	export let loading = false;
	// console.log(data);
	const submit = async (event) => {
		event.preventDefault();
		loading = true;
		const url = `/.netlify/functions/cats`;
		try {
			const res = await fetch(url, {
				method: 'POST'
			});
			data = await res.json();
			console.log(data);
			loading = false;
		} catch (error) {
			data = error;
			loading = false;
		}
	};
</script>

<h1>cat data</h1>
<!-- Now we can run an each loop to display the data. -->
<ul>
	<!-- {#if data?.props}
		{#each data?.props?.cats.data as d}
			<div class="character-tile">
				<h3>{d.user}</h3>
				<p><strong>Text:</strong> {d.text}</p>
				<p><strong>Created On:</strong> {d.createdAt}</p>
			</div>
		{/each}
	{/if} -->
	<button on:click={submit}>LOAD RESPONSE</button>
	<br />
	loading: {loading}
	<br />
	<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
</ul>
