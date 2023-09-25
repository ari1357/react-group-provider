// extarnal

// packages
import type { GroupProviderProps } from '@monorepo/types';

/**
 *
 * @param
 * @returns
 */
const GroupProvider = ({ providers, children }: GroupProviderProps) => {
	console.log(providers);
	return <>{children}</>;
};

export default GroupProvider;
