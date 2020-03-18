import * as React from "react"
import { Override, Data } from "framer"

export function Item(props): Override {
    return {}
}
const appState = Data({
    selected: null,
})

export function Item(props): Override {
    const { id } = props
    const isSelected = appState.selected === id
    console.log(isSelected)
    return {
        variants: {
            closed: {
                height: 40,
            },
            open: {
                height: 200,
            },
        },
        initial: "closed",
        animate: isSelected ? "open" : "closed",
        onTap: () => {
            if (isSelected) {
                appState.selected = null
            } else {
                appState.selected = id
            }
        },
    }
}
