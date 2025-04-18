/**
 * Resolves when the DOM is ready.
 */
export async function ready() {
  return new Promise((resolve) => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve(void 0);
    } else {
      document.addEventListener('DOMContentLoaded', () => resolve(void 0));
    }
  })
}

/**
 * Helper function to easily generate DOM nodes.
 *
 * @param tag
 * @param attributes
 * @param children
 */
export function h(tag: string, attributes: Record<string, unknown> = {}, children: Array<string | HTMLElement> = []): HTMLElement {
  const node = document.createElement(tag);

  if (!Array.isArray(children)) {
    children = [children];
  }

  for (let child of children) {
    if (typeof child === 'string') {
      node.appendChild(new Text(child));
    } else {
      node.appendChild(child)
    }

    for (let name of Object.keys(attributes)) {
      node.setAttribute(name, attributes[name] as any);
    }
  }

  return node;
}

export function getIdFromUrl(url: string = window.location.href) {
  const {pathname} = new URL(url);
  if (!pathname.startsWith('/index.php/downloads/download')) {
    return;
  }
  return pathname.replace(/\/$/, '').split('/').reverse()[0]?.split('-')[0];
}