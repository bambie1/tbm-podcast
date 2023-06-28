export type Episode = {
	number: number;
	title: string;
	audio?: string;
	youtube?: string;
	guest: {
		name: string;
		photo: string;
		instagram?: string;
	};
	slug: string;
	date: string;
};
