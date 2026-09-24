# WebCare DatV UI rules

## 1. Brand and purpose

- Present WebCare DatV as a solution ecosystem, not a single-product website.
- Keep the four catalog items visible: WebCare Incident, WebCare App Notify,
  WebCare Pages and WebCare GitOps.
- Use concise Vietnamese copy. English technical terms are allowed when they are
  standard and clearer than a forced translation.
- Do not invent customers, partners, testimonials, metrics or product maturity.

## 2. Visual direction

- Use the existing forest, paper, mint and amber token palette.
- Use shared CSS variables for both light and dark themes.
- Prefer generous section spacing and compact content inside components.
- Avoid large alternating color blocks, excessive gradients and ornamental UI.
- Keep border radius, border weight and shadows consistent with existing tokens.
- Do not add emoji or decorative icons.
- Use SVG only when a visual is necessary and cannot be expressed cleanly in CSS.

## 3. Solution catalog

- Render solution cards in one horizontal scroll-snap carousel.
- Keep the carousel looping continuously in both directions. After the last
  solution, continue directly with the first solution without an empty end state.
- Keep `Trước` and `Tiếp` active at every position.
- Do not replace the carousel with a 2 by 2 grid unless the user explicitly asks.
- On desktop, show at least two complete cards and part of the next card.
- On mobile, show one card and enough of the next card to communicate scrolling.
- Support touch swipe, trackpad scrolling, mouse drag, keyboard arrows and visible
  `Trước` and `Tiếp` controls.
- Keep the carousel usable when JavaScript fails. Native horizontal scrolling is
  the baseline behavior.
- Show the current position and total number of solutions.
- Keep every card structure consistent: number, category, title, short summary,
  three capabilities and one consultation action.
- Avoid large empty areas inside cards. Cards in the same row should feel equal
  without using an excessive fixed height.
- Do not use strong filled backgrounds to alternate neighboring cards. Use small
  accent bars, labels or borders instead.

## 4. Responsive behavior

- Treat 390 px mobile and 1440 px desktop as required review sizes.
- Keep touch targets at least 42 px high.
- Prevent horizontal page overflow. Only the solution carousel may scroll on the
  inline axis.
- Keep important text readable without truncation.
- Do not rely on hover for required information or actions.

## 5. Accessibility

- Preserve semantic headings, articles, lists, buttons and links.
- Every interactive control must be reachable and usable with a keyboard.
- Keep visible focus states and meaningful accessible labels.
- Respect `prefers-reduced-motion` for smooth scrolling and transitions.
- Maintain sufficient contrast in both themes.
- Do not hide scrollable content from screen readers.

## 6. UI code quality and performance

- Keep stateful UI components in focused JavaScript files. Do not place carousel,
  form, menu and theme logic in one large script.
- Prefer native browser behavior and progressive enhancement before custom logic.
- Do not add a framework or carousel dependency for behavior supported by the
  platform.
- Cache stable geometry such as card offsets. Do not call layout measurement APIs
  repeatedly for every card during each scroll event.
- Throttle visual updates with `requestAnimationFrame`.
- Use `scrollend` to finalize scrolling. A timeout may only be a compatibility
  fallback and must not run when `scrollend` is supported.
- Use passive listeners for observation-only scroll handlers.
- Keep functions focused, use explicit names and avoid shared mutable global state.
- Preserve a functional no-JavaScript baseline.
- Respect reduced-motion preferences in every scripted animation.

## 7. Review checklist

Before completing a UI change:

1. Render light and dark themes.
2. Review desktop and mobile layouts.
3. Test menu, theme switch, carousel, consultation selection and form validation.
4. Check keyboard navigation and focus states.
5. Check that JavaScript parses and no browser console error appears.
6. Confirm no secret, personal contact detail or raster marketing asset was added.
