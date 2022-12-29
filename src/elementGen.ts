import type { NodeType, VNode, Attributes } from "./view"

export const createElement = (node: NodeType): HTMLElement | Text => {
  if (!isVNode(node)) {
    return document.createTextNode(node.toString())
  }

  const el = document.createElement(node.nodeName)
  setAttributes(el, node.attributes)
  node.children.forEach((c) => el.appendChild(createElement(c)))

  return el
}

const isVNode = (node: NodeType): node is VNode => {
  return typeof node !== "string" && typeof node !== "number"
}

const setAttributes = (target: HTMLElement, attrs: Attributes): void => {
  for (let attr in attrs) {
    if (isEventAttr(attr)) {
      const eventName = attr.slice(2)
      target.addEventListener(eventName, attrs[attr] as EventListener)
    } else {
      target.setAttribute(attr, attrs[attr] as string)
    }
  }
}

const isEventAttr = (attr: string): boolean => {
  // onから始まる属性名はイベントとして扱う
  return /^on/.test(attr)
}
