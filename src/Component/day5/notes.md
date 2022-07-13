Question 1:
High Order Component in react js ?
   HOC is an advanced technique for reusing component logic. It is a function 
that takes a component and returns a new component. According to the 
official website, it is not the feature(part) in React API, but a 
pattern that emerges from React compositional nature. They are similar 
to JavaScript functions used for adding additional functionalities to 
the existing component.
    A higher order component function accepts another function as an 
argument. The map function is the best example to understand this.
 The main goal of this is to decompose the component logic into simpler 
 and smaller functions that can be reused as you need
 
 syntax: const NewComponent = higherOrderComponent(WrappedComponent);  
 
 ----------------------------------------------------------------------------
 
 Question 2:
 Do you know about SEO ? Is it true that react js supports SEO support
     SEO, search engine optimization, is a big and complex area. In this 
article, we'll focus on React (or React. js as it is formally named) and 
its effect on SEO. But to summarize SEO it is about making it easier for 
Google to find the right content for the user.
     React helps build a very user-friendly UI that is also valuable by 
SEO, so you definitely shouldn't avoid it while creating a user 
interface for your app/website. However, you should use some tricks to 
ensure that your React-site is understandable for Google crawlers and, 
therefore, good for SEO.

---------------------------------------------------------------------------

Question 3:
Clean up in useEffect?
     The useEffect cleanup is a function in the useEffect Hook that allows 
us to tidy up our code before our component unmounts. When our code runs 
and reruns for every render, useEffect also cleans up after itself using 
the cleanup function.

     useEffect(() => { // This is the effect itself. return () => { // This is its cleanup. }; });
The useEffect cleanup mechanism used to run during commit phase. 
This implies that when a component is unmounting, React would execute 
the cleanup functions and then update the screen.

-----------------------------------------------------------------------------

Question 4:
What is the use of useCallback and useMemo
Call back:
    The useCallback hook is used when a child component is rerendering 
over and over again without any need. 
    By using useCallback, you can prevent unnecessarily re-rendering 
components by returning the same instance of the function that is passed 
instead of creating a new one each time.
  Passing an array of dependencies and a memorialized callback will 
result in a memoized version of the callback that is only modified when 
any dependence changes.

UseMemo:
    The useMemo hook is used in the functional component of React to 
return a memoized value.

The major difference between useCallback and useMemo is that useCallback 
will memory the returned value, whereas useMemo will memory the function.
 Essentially, the only difference between these hooks is that one caches 
 a value type, and the other caches a function.

 --------------------------------------------------------------------------
 
 Question: 5
 Why do we need keys in react less
     The main purpose of keys is to help React differentiate and distinguish 
 elements from each other, increasing its performance when diffing 
 between the virtual and real DOM. To use keys, simply add the prop 
 inside an element such as . Unique IDs are the best value to assign to 
 keys. (or) "Key" prop is used to look pretty, and there is no benefit 
 whatsoever. "Key" prop is a way for React to identify a newly added 
 item in a list and compare it during the "diffing" algorithm. It is one 
 of the attributes in HTML. It is NOT commonly used in an array.
 
 --------------------------------------------------------------------------
 
 Question 6:
 Do you know about redux?
      Redux is a state managing library used in JavaScript apps. It 
simply manages the state of your application or in other words, it is 
used to manage the data of the application. It is used with a library 
like React. Uses: It makes easier to manage state and data. As the 
complexity of our application increases.  */