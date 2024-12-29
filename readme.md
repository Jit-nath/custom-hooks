# React Custom Hooks Made by Me(Jit)

For making the React dev's life better

---

## `useFetch` — Fetch data from a URL

This hook is used to fetch data from a specified URL and manage the loading and error states.

```typescript
const [data, loading, error] = useFetch<T>("https://example.com/");
if (loading) return <p>Loading status</p>;
if (error) return <p>Error: {error}</p>;
```

### Parameters

`url: string` - The URL from which the data will be fetched. Returns a tuple with three values:

1. `data: ` The fetched data, typed as `T` (or null if not yet fetched or on error).

2. `loading: boolean` A boolean indicating if the request is in progress.

3. `error: string` A string containing the error message, or null if no error occurred.

### Usage

`<T>` represents the type of data you're expecting to receive from the server. It can be either an object or an array of objects.

### Example 1: Fetching a single object

```typescript
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}
const [data, loading, error] = useFetch<Data>("https://example.com/");
```

### Example 2: Fetching an array of objects

```typescript
Copy code
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}

const [data, loading, error] = useFetch<Data[]>("https://example.com/");
```

---

# React Custom Hooks Made by Me(Jit)

For making the React dev's life better

---

## `useFetch` — Fetch data from a URL

This hook is used to fetch data from a specified URL and manage the loading and error states.

```typescript
const [data, loading, error] = useFetch<T>("https://example.com/");
if (loading) return <p>Loading status</p>;
if (error) return <p>Error: {error}</p>;
```

### Parameters

`url: string` - The URL from which the data will be fetched. Returns a tuple with three values:

1. `data: ` The fetched data, typed as `T` (or null if not yet fetched or on error).

2. `loading: boolean` A boolean indicating if the request is in progress.

3. `error: string` A string containing the error message, or null if no error occurred.

### Usage

`<T>` represents the type of data you're expecting to receive from the server. It can be either an object or an array of objects.

### Example 1: Fetching a single object

```typescript
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}
const [data, loading, error] = useFetch<Data>("https://example.com/");
```

### Example 2: Fetching an array of objects

```typescript
Copy code
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}

const [data, loading, error] = useFetch<Data[]>("https://example.com/");
```

---

## `usePost` — Send a POST request

This hook is used to send a POST request with a body, and manage the request state.

```typescript
const [data, loading, error] = usePost<T>("https://example.com/", requestBody);
if (loading) return <p>Loading status</p>;
if (error) return <p>Error: {error}</p>;
```

### Parameters

1.  url: string - The URL to which the POST request will be sent.
2.  body: any - The body of the POST request, typically an object to be sent in JSON format.
    Returns<br>
    A tuple with three values:

    1. data: The response data, typed as T (or null if no response).

    2. loading: A boolean indicating if the request is in progress.

    3. error: A string containing any error message, or null if no error occurred.

### Usage

`<T> `represents the expected response type from the server.

### Example:

```typescript
interface Response {
  status: string;
  message: string;
}

const [data, loading, error] = usePost<Response>("https://example.com/api", {
  username: "John",
  password: "123",
});
```

# React Custom Hooks Made by Me(Jit)

For making the React dev's life better

---

## `useFetch` — Fetch data from a URL

This hook is used to fetch data from a specified URL and manage the loading and error states.

```typescript
const [data, loading, error] = useFetch<T>("https://example.com/");
if (loading) return <p>Loading status</p>;
if (error) return <p>Error: {error}</p>;
```

### Parameters

`url: string` - The URL from which the data will be fetched. Returns a tuple with three values:

1. `data: ` The fetched data, typed as `T` (or null if not yet fetched or on error).

2. `loading: boolean` A boolean indicating if the request is in progress.

3. `error: string` A string containing the error message, or null if no error occurred.

### Usage

`<T>` represents the type of data you're expecting to receive from the server. It can be either an object or an array of objects.

### Example 1: Fetching a single object

```typescript
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}
const [data, loading, error] = useFetch<Data>("https://example.com/");
```

### Example 2: Fetching an array of objects

```typescript
Copy code
interface Data {
  name: string;
  roll?: number;
  working?: boolean;
}

const [data, loading, error] = useFetch<Data[]>("https://example.com/");
```

---

## `useMousePos` — Get the position of mouse in a id

his hook is used to get the position of the mouse pointer within a specified element by its ID.

```typescript
const [x, y] = useMousePos("canvasId");
```

### Parameters

1.  `elementId : string` — The ID of the element to track the mouse position within.
    Returns a tuple:
    1.  x: number — The horizontal position of the mouse relative to the element.
    2.  y: number — The vertical position of the mouse relative to the element.


### Example:

```typescript
const [x, y] = useMousePos("canvas");

return (
  <div>
    <p>Mouse position: {`X: ${x}, Y: ${y}`}</p>
    <canvas id="canvas" width={500} height={500}></canvas>
  </div>
);
```

---

## Additional Documentation

#### Why use these custom hooks?

> These hooks help abstract away the repetitive logic for making HTTP requests in React components.
> Instead of managing state, loading, and error handling in each component,
> you can reuse these hooks to manage the data fetching process in a clean and reusable way.

#### How to handle different HTTP statuses and errors?

> The hooks handle errors by setting the error state if something goes wrong
> during the fetch or post operation.
> You can extend the functionality to handle specific
> HTTP status codes or responses based on your needs.

#### When to use interfaces for the response types?

> Using TypeScript interfaces ensures type safety when
> consuming the response data. It provides autocompletion,
> helps detect potential bugs early, and makes the code more
> readable and maintainable.

#### Final Notes

> These hooks are designed to make the code cleaner and more reusable,
> enabling you to fetch and post data with minimal boilerplate.
> You can extend and modify them as per your specific needs,
> such as adding features like request cancellation, retries,
> or handling different content types.

Feel free to customize and improve upon these hooks for your own projects!

---

## Additional Documentation

#### Why use these custom hooks?

> These hooks help abstract away the repetitive logic for making HTTP requests in React components.
> Instead of managing state, loading, and error handling in each component,
> you can reuse these hooks to manage the data fetching process in a clean and reusable way.

#### How to handle different HTTP statuses and errors?

> The hooks handle errors by setting the error state if something goes wrong
> during the fetch or post operation.
> You can extend the functionality to handle specific
> HTTP status codes or responses based on your needs.

#### When to use interfaces for the response types?

> Using TypeScript interfaces ensures type safety when
> consuming the response data. It provides autocompletion,
> helps detect potential bugs early, and makes the code more
> readable and maintainable.

#### Final Notes

> These hooks are designed to make the code cleaner and more reusable,
> enabling you to fetch and post data with minimal boilerplate.
> You can extend and modify them as per your specific needs,
> such as adding features like request cancellation, retries,
> or handling different content types.

Feel free to customize and improve upon these hooks for your own projects!

---

## Additional Documentation

#### Why use these custom hooks?

> These hooks help abstract away the repetitive logic for making HTTP requests in React components.
> Instead of managing state, loading, and error handling in each component,
> you can reuse these hooks to manage the data fetching process in a clean and reusable way.

#### How to handle different HTTP statuses and errors?

> The hooks handle errors by setting the error state if something goes wrong
> during the fetch or post operation.
> You can extend the functionality to handle specific
> HTTP status codes or responses based on your needs.

#### When to use interfaces for the response types?

> Using TypeScript interfaces ensures type safety when
> consuming the response data. It provides autocompletion,
> helps detect potential bugs early, and makes the code more
> readable and maintainable.

#### Final Notes

> These hooks are designed to make the code cleaner and more reusable,
> enabling you to fetch and post data with minimal boilerplate.
> You can extend and modify them as per your specific needs,
> such as adding features like request cancellation, retries,
> or handling different content types.

Feel free to customize and improve upon these hooks for your own projects!
