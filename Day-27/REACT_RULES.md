# React JSX Rules & Syntax

The essential rules for writing React and JSX, with examples from this repo.

---

## JSX Rules

**1. One root element per component** — JSX must be wrapped in a single parent:
```jsx
// OK
return <div>...</div>

// Fragment also OK (no extra DOM element)
return (<>...</>)
```

**2. Components must be capitalized** — `<TodoList />` works, `<todoList />` breaks. Lowercase tags are treated as plain HTML.

**3. `class` becomes `className`** — `class` is a reserved word in JS:
```jsx
<li className="done">...</li>
```

**4. Attributes are camelCase** — `onClick`, `onChange`, `onSubmit`, `autoFocus` (not `onclick`, `onchange`).

**5. Inline styles are objects** — `style={{ color: "red" }}` (double braces: outer = JSX expression, inner = object).

**6. Embed JS with `{}`** — any expression goes inside braces:
```jsx
<p>{count}</p>
<button onClick={() => setCount(count + 1)}>+</button>
```

**7. Self-closing tags are required** — `<img />`, `<input />`, `<Counter />`.

**8. Comments use `{/* ... */}`** inside JSX.

## Data & Rendering Rules

**9. State is read-only — never mutate directly**, always use the setter:
```js
setCount(count + 1);   // correct
count = count + 1;     // wrong - won't re-render
```

**10. State must not be updated during render** — only in event handlers or `useEffect`.

**11. Lists need a unique `key`** on each item:
```jsx
{todos.map(todo => <li key={todo._id}>...</li>)}
```

**12. Use `map` to render, `filter` to remove, `map` to update** — always create a new array (never mutate the old one):
```js
setTodos([...todos, newTodo]);                       // add
setTodos(todos.filter(t => t._id !== id));            // remove
setTodos(todos.map(t => t._id === id ? updated : t)); // update
```

## Component Rules

**13. Components are functions that return JSX** — names start with uppercase, one component per file is the common convention.

**14. Props are read-only** — a parent passes data to a child; a child never changes its own props.

**15. Hooks rules** — `useState` returns `[value, setValue]`, and hooks must be called at the top level of the component (not inside loops, conditions, or nested functions).

**16. `useEffect` dependency array** — `[]` = run once on mount; with values = run when they change; omitted = run after every render (usually avoid).

**17. Forms need `e.preventDefault()`** on submit, or the page reloads and loses state.

## Cheat Sheet

| Concept | Syntax |
| --- | --- |
| State | `const [count, setCount] = useState(0)` |
| Effect (once) | `useEffect(() => {...}, [])` |
| Event handler | `onClick={() => ...}` |
| Conditional class | `className={cond ? "done" : ""}` |
| Conditional render | `{loading ? <p>...</p> : <List />}` |
| List | `arr.map(item => <Item key={item._id} />)` |
| Input value | `value={title} onChange={(e) => setTitle(e.target.value)}` |
