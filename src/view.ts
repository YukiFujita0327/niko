export type NodeType = VNode | string | number
export type Attributes = { [key: string]: string | Function }

/**
 * Virtual Dom
 */
export interface VNode {
  nodeName: keyof HTMLElementTagNameMap
  attributes: Attributes
  children: NodeType[]
}

export interface View<State, Actions> {
  (state: State, actions: Actions): VNode
}

export const createVirtualDom = (
  nodeName: keyof HTMLElementTagNameMap,
  attributes: Attributes,
  ...children: NodeType[]
): VNode => {
  return { nodeName, attributes, children }
}
