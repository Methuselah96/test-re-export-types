/**
 * @typedef PluginOptions
 * @property {import('child').Options} [childOptions]
 */
export function thisIsAModule(): void;
export type PluginOptions = {
    childOptions?: import("grandchild").Options | undefined;
};
