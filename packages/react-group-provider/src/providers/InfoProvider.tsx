// extarnal
import { createContext, useState } from 'react';

import { ChildrenProps, InfoContextProps } from '@monorepo/types';

// create context
export const InfoContext = createContext<InfoContextProps>({
	info: '',
	setInfo: () => {}
});

const InfoProvider = ({ children }: ChildrenProps) => {
	// state
	const [info, setInfo] = useState<string>('');

	return (
		<InfoContext.Provider value={{ info, setInfo }}>
			{children}
		</InfoContext.Provider>
	);
};
export default InfoProvider;
