type ShortcutCallback = () => void;

class ShortcutManager {
  private shortcuts: Map<string, ShortcutCallback>;

  constructor() {
    this.shortcuts = new Map();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.addEventListener('keydown', this.handleKeyPress);
  }

  unregister(shortcut: string): ShortcutManager {
    this.shortcuts.delete(shortcut);
    return this;
  }

  register(shortcut: string, callback: ShortcutCallback): ShortcutManager {
    this.shortcuts.set(shortcut, callback);
    return this;
  }

  private handleKeyPress(event: KeyboardEvent): void {
    const pressedKeys = new Set<string>();

    if (event.ctrlKey) pressedKeys.add('Ctrl');
    if (event.altKey) pressedKeys.add('Alt');
    if (event.shiftKey) pressedKeys.add('Shift');
    if (event.metaKey) pressedKeys.add('Meta');

    const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
    pressedKeys.add(key);

    const shortcuts = Array.from(this.shortcuts.keys());
    for (const shortcut of shortcuts) {
      const keys = shortcut.split('+');
      const matchedKeys = keys.every((key) => pressedKeys.has(key));

      if (matchedKeys) {
        event.preventDefault();
        this.shortcuts.get(shortcut)?.();
      }
    }
  }
}

export { ShortcutManager }