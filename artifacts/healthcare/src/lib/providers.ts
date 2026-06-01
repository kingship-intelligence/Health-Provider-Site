/** Provider shown on the public Providers page and related UI. */
export const FEATURED_PROVIDER_ID = "p_olayemi_olajuyigbe";

export function isFeaturedProvider(id: string): boolean {
  return id === FEATURED_PROVIDER_ID;
}
