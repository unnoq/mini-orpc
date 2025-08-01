import { createORPCClient } from '@mini-orpc/client';
import { RPCLink } from '@mini-orpc/client/fetch';
import type { RouterClient } from '@mini-orpc/server';
import type { router } from '@/router';

const link = new RPCLink({
  url: `${window.location.origin}/rpc`,
});

export const orpc: RouterClient<typeof router> = createORPCClient(link);
