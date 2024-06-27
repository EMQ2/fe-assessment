# Coding Challenge: Dynamic Form with Data Fetching, Performance Optimization, and Routing

## Objective

![image](/docs/img/demo.gif)

Create a React application with the following features:
1. **Custom Hook for Fetching Data:** Create a custom hook `useFetch` to fetch the JSON schema and form data.
2. **Dynamic Form Rendering:** Implement a form that dynamically renders fields based on a JSON schema fetched from an API.
3. **Memoization with `useMemo` and `useCallback`:** Optimize the form rendering and handling to prevent unnecessary re-renders.
4. **Routing with React Router:** Use React Router to navigate between the form page and a submission confirmation page.
5. **Styling with Bootstrap:** Use Bootstrap to style the form and other components.

## Instructions

1. **Implement Custom Hook:**
   - In the `src/hooks/useFetch.js` file, implement the custom hook `useFetch` to fetch data from a given URL.

2. **Implement Form Component:**
   - In the `src/components/Form.js` file, implement the `Form` component to dynamically render form fields based on the fetched schema.

3. **Optimize Performance:**
   - Use `useMemo` and `useCallback` to optimize the form rendering and handling in the `Form` component.

4. **Set Up Routing:**
   - In the `src/App.js` file, update it to include routing using React Router.

5. **Integrate Bootstrap:**
   - In the `src/index.js` file, import Bootstrap CSS.
   - In `src/components/Form.js`, use Bootstrap classes to style the form.

## Notes

- You are provided with a basic React app with the necessary packages already installed.
- All the files that need to be created are already created. You just need to fill them up accordingly.
- The mock API is already running on port 5001, serving the JSON schema.
