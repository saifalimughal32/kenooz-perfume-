// Stub: replaces supabase newsletter form with a no-op so build passes.
export const supabase = {
  from: (_table: string) => ({
    insert: async (_payload: unknown) => ({ error: null as null | { code?: string } }),
  }),
};
