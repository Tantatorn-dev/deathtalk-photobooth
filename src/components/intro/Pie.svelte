<script>
	import { tweened } from "svelte/motion";

	export let size = 200;
	export let bgColor = 'rgb(219, 111, 79)';
	export let fgColor = 'rgb(219, 181, 80)';

	const store =tweened(0, {
		duration: 1000
	});

	setTimeout(() => {
		store.set(80);
	}, 500);

	$: viewBox = `0 0 ${size} ${size}`;

	$: radius = size / 2;
	$: halfCircumference = Math.PI * radius;
	$: pieSize = halfCircumference * ($store / 100);
	$: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>

<svg width={size} height={size} {viewBox}>
	<circle r={radius} cx={radius} cy={radius} fill={bgColor} />
	<circle
		r={radius / 2}
		cx={radius}
		cy={radius}
		fill={bgColor}
		stroke={fgColor}
		stroke-width={radius}
		stroke-dasharray={dashArray}
	/>
	<text x="55" y="65" class="fill-white small">80%</text>
	<text x="145" y="145" class="fill-white small">20%</text>
</svg>
