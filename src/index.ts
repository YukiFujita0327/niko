import { createVirtualDom, VNode } from "./view"
import { createElement } from "./elementGen"

const view = (state: any, actions: any): VNode =>
  createVirtualDom(
    "div",
    { id: "app-child" },
    createVirtualDom("p", { id: "counter" }, state.count),
    createVirtualDom(
      "button",
      {
        type: "button",
        id: "increment",
        onClick: () => {
          actions.increment()
        },
      },
      "+1"
    )
  )

const v: VNode = view({ count: 2 }, { increment: () => {} })

document.getElementById("app")?.appendChild(createElement(v))
