import typescript from '@rollup/plugin-typescript';

export default [
	{
        plugins: [typescript()],
		input: 'src/leaflet.hotline.ts',
		output: [
			{
				file: 'dist/leaflet.hotline.js',
				format: 'esm',
				sourcemap: true
			}
		]
	}
];
