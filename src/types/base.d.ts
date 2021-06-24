/* eslint-disable @typescript-eslint/naming-convention,filenames/match-regex */

type Maybe<T> = T | undefined;
type Nullable<T> = T | null;
type ArgumentTypes<F> = F extends (...args: infer A) => any ? A : never;
type Props<T> = T extends Function ? ArgumentTypes<T>[0] : T extends React.Component<infer U> ? U : {};

declare const DEBUG: boolean;
