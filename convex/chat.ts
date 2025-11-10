import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const sendMessage = mutation({
    args: {
        user: v.string(),
        body: v.string(),
    },
    handler: async (ctx, args) => {
        console.log(`User ${args.user} sent message: ${args.body}`);
        await ctx.db.insert('messages', {
            user: args.user,
            message: args.body,
        });
    },
});
