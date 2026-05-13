import * as React from 'react';
export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {
    /** When the user is already at the bottom, automatically scroll new
     * messages into view. When the user has scrolled up, leave them be.
     * @default true */
    stickToBottom?: boolean;
    /** Apply a soft mask at the top and bottom so messages fade into the
     * scroll edges. Subtle, ~24px on each side.
     * @default false */
    fadeEdges?: boolean;
}
/**
 * Scrollable chat message container with smart auto-scroll behavior. Stays
 * pinned to the bottom while the user is reading the latest message; once
 * they scroll up to revisit history, new messages no longer yank them away.
 */
export declare const MessageList: React.ForwardRefExoticComponent<MessageListProps & React.RefAttributes<HTMLDivElement>>;
