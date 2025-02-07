```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a callback function directly in the useEffect dependency array
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setCount]); //Incorrect dependency

  return <div>Count: {count}</div>;
}
```