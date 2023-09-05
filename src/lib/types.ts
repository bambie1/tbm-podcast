export type Episode = {
	number: string;
	title: string;
	audio?: string;
	youtube?: string;
	guest: {
		name: string;
		photo: string;
		instagram?: string;
	}; 
	date: string;
	content: string;
};
