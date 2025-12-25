import { createService } from "../actions";

export default function createPage() {
    return (
        <form action={createService}>
            <input type="name" />
            <input type="price" />
            <button type="submit">Save</button>
        </form>
    )
}