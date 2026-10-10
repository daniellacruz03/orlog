let id = 0;

export function getNextLogoId(): string {
  return `orlog-mask-${++id}`;
}
