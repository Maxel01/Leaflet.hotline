import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/leaflet.hotline.js',
		output: [
			{
				file: 'dist/leaflet.hotline.js',
				format: 'esm',
				sourcemap: true
			},
			{
				file: 'dist/leaflet.hotline.min.js',
				format: 'esm',
				sourcemap: true,
				plugins: [terser()]
			}
		]
	}
];
