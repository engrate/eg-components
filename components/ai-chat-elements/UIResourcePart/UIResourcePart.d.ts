export interface UIResourceFetched {
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: string;
}
export interface UIResourcePartProps {
    /** MCP tool name that produced this part — passed through to the iframe so
     * the guest UI can route on it. */
    toolName: string;
    /** `ui://...` URI of the resource that holds the HTML shell. */
    resourceUri: string;
    /** The `output` field of an AI SDK `DynamicToolUIPart` in `output-available`
     * state. Forwarded to the iframe as a CallToolResult so the guest UI can
     * render the payload. Shape may be `{ type: 'content', value: ContentBlock[] }`
     * (the @ai-sdk/mcp adapter shape) or any other JSON serialisable value;
     * unknown shapes fall back to an empty content array. */
    toolOutput: unknown;
    /** Resource-fetch implementation. Injected so the host can route through a
     * server-side proxy (the browser cannot talk to MCP directly because MCP
     * needs a bearer token). */
    fetchResource: (uri: string) => Promise<UIResourceFetched>;
    /** Where the sandbox proxy HTML is hosted. Defaults to
     * `/sandbox_proxy.html` on the current origin. */
    sandboxUrl?: URL;
    /** Extra wrapper classes (the iframe itself fills the wrapper). */
    className?: string;
}
/**
 * Renders an MCP App UI resource inline as an interactive widget in a chat
 * surface. Use this from a `<MessageContent>` `renderTool` override when a
 * tool result should display as a widget rather than as plain JSON.
 *
 * Wraps `@mcp-ui/client`'s `<AppRenderer>` and handles the resource-fetch
 * lifecycle. Pre-fetches the HTML body via `fetchResource` (typically a
 * server-side proxy that talks to MCP) and forwards the tool output to the
 * iframe via the standard MCP Apps postMessage handshake.
 *
 * Note: `@ai-sdk/mcp` strips `annotations.audience` from content blocks
 * before they reach the browser, so the guest UI must use a positional or
 * structural heuristic to pick the user-facing payload from `toolResult.content`.
 */
export declare function UIResourcePart({ toolName, resourceUri, toolOutput, fetchResource, sandboxUrl, className, }: UIResourcePartProps): import("react/jsx-runtime").JSX.Element;
