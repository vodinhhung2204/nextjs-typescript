export const initialState = {
	data: [
		{
			_createdAt: '2022-04-09T18:20:47Z',
			_id: '922e0927-21a4-4114-874f-c3c809736953',
			_rev: 'SfIERQMslhaJeTxVtTz7ug',
			_type: 'product',
			_updatedAt: '2022-04-09T18:20:47Z',
			details: 'Immerse in the amazing sound',
			image: [[Object], [Object], [Object], [Object]],
			name: 'Speaker',
			price: 56,
			slug: { _type: 'slug', current: 'speaker' },
		},
		{
			_createdAt: '2022-04-10T18:05:11Z',
			_id: '96e537ff-2ca9-4cd5-968a-902275543273',
			_rev: 'BM1A6k1ZxVmyLJbhBztqjC',
			_type: 'product',
			_updatedAt: '2022-04-10T18:05:11Z',
			details: 'Cool smartwatch',
			image: [[Object]],
			name: 'Smartwatch',
			price: 99,
			slug: { _type: 'slug', current: 'smartwatch' },
		},
		{
			_createdAt: '2022-04-09T18:22:34Z',
			_id: '99de09b7-7483-426c-b6bc-02b73d13780a',
			_rev: 'BM1A6k1ZxVmyLJbhBzbfbu',
			_type: 'product',
			_updatedAt: '2022-04-09T18:22:34Z',
			details: 'Use these while working out',
			image: [[Object], [Object], [Object], [Object]],
			name: 'Cool In-ear headphones',
			price: 40,
			slug: { _type: 'slug', current: 'cool-in-ear-headphones' },
		},
		{
			_createdAt: '2022-04-09T18:21:53Z',
			_id: 'cd8bf17c-a592-4764-a92d-b272c90c72c1',
			_rev: 'p1zqaFvUly0BvF0pCyi2xF',
			_type: 'product',
			_updatedAt: '2022-04-09T18:21:53Z',
			details: 'A second pair of headphones',
			image: [[Object], [Object], [Object], [Object]],
			name: 'Headphones',
			price: 55,
			slug: { _type: 'slug', current: 'headphones_new' },
		},
		{
			_createdAt: '2022-04-09T10:29:37Z',
			_id: 'd5c7a247-6b46-4326-a98c-b172e79e28a4',
			_rev: 'SfIERQMslhaJeTxVtTunTS',
			_type: 'product',
			_updatedAt: '2022-04-09T10:29:37Z',
			details: 'Great looking and sounding headphones!',
			image: [[Object]],
			name: 'Headphones',
			price: 99,
			slug: { _type: 'slug', current: 'headphones' },
		},
	],
}

function homeReducer(state = initialState, action: any) {
	switch (action.type) {
		default:
			return state
	}
}

export default homeReducer
