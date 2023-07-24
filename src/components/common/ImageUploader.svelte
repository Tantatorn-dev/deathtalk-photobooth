<script lang="ts">
	let avatar = '';
	let fileinput: HTMLInputElement;

	const onFileSelected = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		let image = e.currentTarget?.files?.[0];
		let reader = new FileReader();

		if (!image) return;

		reader.readAsDataURL(image);
		reader.onload = (e) => {
			if (e.target) avatar = e.target.result as string;
		};
	};
</script>

<div class="img-uploader">
	{#if avatar}
		<img class="avatar" src={avatar} alt="d" />
	{:else}
		<img
			class="avatar"
			src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
			alt=""
		/>
	{/if}
	<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" />
	<button
		class="chan"
		on:click={() => {
			fileinput.click();
		}}
	>
		Choose Image
	</button>
	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>

<style>
	.img-uploader {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	}

	.upload {
		display: flex;
		height: 50px;
		width: 50px;
		cursor: pointer;
	}
	.avatar {
		display: flex;
		height: 200px;
		width: 200px;
	}
</style>
