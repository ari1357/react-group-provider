// type
import type { Dispatch, SetStateAction } from 'react';

export type InfoContextProps = {
	info: string;
	setInfo: Dispatch<SetStateAction<string>>;
};
