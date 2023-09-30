// extarnal
import type { GroupProviderProps } from '@monorepo/types';

/**
 * resolves provider nesting issues
 * @param providers - array provider / not []
 * @returns FunctionComponent
 */
const GroupProvider = (
	providers: [GroupProviderProps, ...GroupProviderProps[]]
): GroupProviderProps => {
	// one provider is return
	if (providers.length === 1) return providers[0];

	// wrap provider - first providers delete
	const WrapProvider = providers.shift();
	// child provider - second providers delete
	const ChildProvider = providers.shift();

	// return wrap
	return GroupProvider([
		({ children }) => (
			<WrapProvider>
				<ChildProvider>{children}</ChildProvider>
			</WrapProvider>
		),
		...providers
	]);
};

export default GroupProvider;
