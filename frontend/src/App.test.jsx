import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import {describe, it, expect, vi} from "vitest"
import "@testing-library/jest-dom"
import App from "./App"
import {getTasks} from "./services/api"

vi.mock("./services/api", () => ({
  getTasks: vi.fn(),
}))

describe("App Component", () => {
  it("renders the Task Manager heading", async () => {
    render(<App />)
    const heading = screen.getByText("Task Manager")
    expect(heading).toBeInTheDocument()
  })

  it("fetches tasks and displays them", async () => {
    getTasks.mockResolvedValue({
      data: [
        {
          id: "d8c3a3b1-2b97-47da-8f6d-0b25a5289df9",
          title: "Task 1",
          description: "Description",
          status: "pending",
          due_date: "2022-01-01",
        },
      ],
    })
    render(<App />)

    await waitFor(() => {
      expect(screen.getByText("Task 1")).toBeInTheDocument()
    })
  })

  it("toggles the form visibility when the button is clicked", () => {
    render(<App />)

    const toggleButton = screen.getByText("Create Task")
    fireEvent.click(toggleButton)

    expect(screen.getByText("Close Form")).toBeInTheDocument()

    fireEvent.click(toggleButton)
    expect(screen.getByText("Create Task")).toBeInTheDocument()
  })

  it("deletes a task when the delete button is clicked", async () => {
    getTasks.mockResolvedValue({
      data: [
        {
          id: "d8c3a3b1-2b97-47da-8f6d-0b25a5289df9",
          title: "Task 1",
          description: "Description",
          status: "pending",
          due_date: "2022-01-01",
        },
      ],
    })
  })
})
