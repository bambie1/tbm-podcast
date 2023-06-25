export type Episode = {
	number: number;
	title: string;
	audio?: string;
	guest: {
		name: string;
		photo: string;
		instagram?: string;
	};
	slug: string;
};
