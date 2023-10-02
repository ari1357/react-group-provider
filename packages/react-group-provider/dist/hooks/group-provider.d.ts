import type { GroupProviderProps } from '../../node_modules/@monorepo/types';
/**
 * resolves provider nesting issues
 * @param providers - array provider / not []
 * @returns FunctionComponent
 */
declare const GroupProvider: (providers: [GroupProviderProps, ...GroupProviderProps[]]) => GroupProviderProps;
export default GroupProvider;
