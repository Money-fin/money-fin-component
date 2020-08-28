export function saveLocalStorage(top: string, left: string): void {
  if (!window.localStorage) {
    return;
  }
  localStorage.setItem('money-fin-position-top', top);
  localStorage.setItem('money-fin-position-left', left);
}
