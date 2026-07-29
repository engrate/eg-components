import * as React from 'react';
import * as S from "@ds-stories/src/components/ui/Toast/Toast.stories";

function compose(S: any, key: string) {
  const meta: any = S.default ?? {};
  const st: any = S[key];
  const args: any = { ...(meta.args ?? {}), ...(st && st.args ? st.args : {}) };
  // Storybook resolves argTypes.mapping (control value -> real arg) before
  // rendering; mirror that so mapped args don't render raw.
  const at: any = { ...(meta.argTypes ?? {}), ...(st && st.argTypes ? st.argTypes : {}) };
  for (const k of Object.keys(args)) {
    const m = at[k] && at[k].mapping;
    if (m && typeof m === 'object' && args[k] in m) args[k] = m[args[k]];
  }
  const title: string = typeof meta.title === 'string' ? meta.title : '';
  const ctx: any = {
    args, name: key, title, kind: title, id: '', componentId: '',
    globals: {}, viewMode: 'story',
    parameters: (st && st.parameters) ?? meta.parameters ?? {},
  };
  let render: (() => any) | null = null;
  if (st && typeof st.render === 'function') render = () => st.render(args, ctx);
  else if (typeof st === 'function') render = () => st(args, ctx);
  else if (typeof meta.render === 'function') render = () => meta.render(args, ctx);
  else {
    const C = (st && st.component) || meta.component;
    if (C) render = () => React.createElement(C, args);
  }
  if (!render) return () => null;
  // [].concat: a single function is legal CSF decorator shorthand. A
  // decorator returning undefined (stubbed addon) falls through to the inner
  // render — otherwise one unrecognized addon blanks the cell silently.
  const decorators: any[] = ([] as any[]).concat((st && st.decorators) ?? []).concat(meta.decorators ?? []);
  return decorators.reduce((inner: any, dec: any) => () => {
    const out = dec(inner, ctx);
    return out === undefined ? inner() : out;
  }, render);
}

// Owned preview — see .design-sync/NOTES.md ("Toast").
//
// Radix renders every <Toast> into <ToastViewport>, which the DS styles
// `fixed … sm:right-0 sm:bottom-0`. Fixed content contributes no layout, so the
// card wrapper collapses to zero height and `bottom-0` resolves ABOVE the card
// (measured y: -422) — the toasts render, but off-screen above it.
//
// Stage gives the viewport a real containing block: `transform` makes this the
// containing block for fixed descendants, and the height gives `bottom-0`
// somewhere to land, so the toasts pin bottom-right exactly as they do in the
// repo's own storybook. The stories' `open` state, the ToastProvider decorator
// and ToastViewport's own classes are all untouched — only the stage is added.
const Stage = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      transform: 'translateZ(0)',
      position: 'relative',
      minHeight: 460,
      width: '100%',
    }}
  >
    {children}
  </div>
)

const staged = (key: string) => {
  const Composed = compose(S, key)
  return () => (
    <Stage>
      <Composed />
    </Stage>
  )
}

export const Default = staged('Default')
export const Success = staged('Success')
export const Error = staged('Error')
export const Warning = staged('Warning')
export const Info = staged('Info')
export const WithAction = staged('WithAction')
export const TitleOnly = staged('TitleOnly')
export const AllVariants = staged('AllVariants')
export const Interactive = staged('Interactive')
