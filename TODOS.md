# TODOS:
- Review: Should the types within 'design styles' be standardized based on properties like size, width, thickness, color, etc.? For example: `export type DesignStyleWidthBase = 'short' | 'medium' | 'long'` + `export type DesignStyleWidthExtended = DesignStyleWidthBase | 'ultraShort' | 'extraLong'`, etc.?
- Review: shoud i remove or simplicity hook useLocalStorage()?
- Into navbar add top bar with important info (closed, etc) const in top and closable in bottom?
- add toast component (review: use dialog without overlay or create new component?) (top/bottom and right/left/center with icon (info, warning, error) text and close button and lifetime?)
- expand /design-system by table.ts card.ts surface.ts etc.
- add slide-in animate?
- add animate loading placeholder component?
- add theme feature?
- add useRef() into Dialog component and optional Modal, Banner, Drawer components.