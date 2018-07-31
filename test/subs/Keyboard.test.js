import { runFx } from "../utils"
import { Keyboard } from "../../src"

describe("Keyboard subscription", () => {
  it("should add and remove keydown listener", () => {
    const keyEvent = new KeyboardEvent("keydown", { key: "a", code: "KeyA" })
    const action = jest.fn()
    const keyboardFx = Keyboard({ downs: true, action })
    const { dispatch, unsubscribe } = runFx(keyboardFx)
    document.dispatchEvent(new KeyboardEvent("keydown", keyEvent))
    expect(dispatch).toBeCalledWith(action, keyEvent)

    dispatch.mockReset()
    unsubscribe()
    document.dispatchEvent(new KeyboardEvent("keydown", keyEvent))
    expect(dispatch).not.toBeCalled()
  })
  it("should add and remove keyup listener", () => {
    const keyEvent = new KeyboardEvent("keyup", { key: "a", code: "KeyA" })
    const action = jest.fn()
    const keyboardFx = Keyboard({ ups: true, action })
    const { dispatch, unsubscribe } = runFx(keyboardFx)
    document.dispatchEvent(new KeyboardEvent("keyup", keyEvent))
    expect(dispatch).toBeCalledWith(action, keyEvent)

    dispatch.mockReset()
    unsubscribe()
    document.dispatchEvent(new KeyboardEvent("keyup", keyEvent))
    expect(dispatch).not.toBeCalled()
  })
  it("should add and remove keypress listener", () => {
    const keyEvent = new KeyboardEvent("keypress", { key: "a", code: "KeyA" })
    const action = jest.fn()
    const keyboardFx = Keyboard({ presses: true, action })
    const { dispatch, unsubscribe } = runFx(keyboardFx)
    document.dispatchEvent(new KeyboardEvent("keypress", keyEvent))
    expect(dispatch).toBeCalledWith(action, keyEvent)

    dispatch.mockReset()
    unsubscribe()
    document.dispatchEvent(new KeyboardEvent("keypress", keyEvent))
    expect(dispatch).not.toBeCalled()
  })
})