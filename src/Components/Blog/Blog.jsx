import React from "react";

const Blog = () => {
  return (
    <>
      <div className="banner-div header-container py-8 px-40 bg-gray-100">
        <div className="banner-contents mt-20 order-last md:order-first">
          <h3 className="text-center mb-5 font-bold text-3xl">Blog</h3>
        </div>
      </div>

      <div className="text-center bg-green-200 py-8">
        <div >
          <h1 className="text-center mt-11 font-semibold text-5xl">
            Frequently Asked Questions
          </h1>

          <div className="w-2/3 mx-auto mt-10 rounded-lg bg-emerald-100 px-7 py-8 text-center">
            <h3 className="text-2xl font-semibold">
              Q1: When should we use context API?
            </h3>
            <p className="text-lg mt-2">
              {" "}
              <span className="text-xl font-medium"></span> The Context API
              is useful for sharing data that can be considered global, such as
              the currently authenticated user, the theme settings for the
              application, and more. In situations where we have these types of
              data, we can use the Context API and we don't necessarily have to
              use extra modules.In fact, any situation where you have to pass a
              prop through a component so it reaches another component somewhere
              down the tree is where you can use the Context API.
            </p>
          </div>

          <div className="w-2/3 mx-auto mt-10 rounded-lg bg-emerald-100 px-7 py-8 text-center">
            <h3 className="text-2xl font-semibold">
              Q2: What is a custom hook in react?
            </h3>
            <p className="text-lg mt-2">
              {" "}
              <span className="text-xl font-medium"></span> Custom React JS
              hooks are reusable functions that a React JS software developer
              can use to add special and unique functionality to the React
              applications. Usually, if there is a requirement to add a feature,
              one can install a third-party library and solve the problem.A
              custom hook is a special JavaScript function whose name starts
              with "use" and can be used to call other hooks.
            </p>
          </div>

          <div className="w-2/3 mx-auto mt-10 rounded-lg bg-emerald-100 px-7 py-8 text-center">
            <h3 className="text-2xl font-semibold">
              Q3: What is useRef in react?
            </h3>
            <p className="text-lg mt-2">
              {" "}
              <span className="text-xl font-medium"></span> Ref means just
              reference, so it can be a reference to anything (DOM node,
              Javascript value, etc). The useRef hook returns a mutable object
              which doesn't re-render the component when it's changed. Think it
              like useState, but unlike useState, doesn't trigger re-render of
              the component. The object that useRef returns have a current
              property that can hold any modifiable value.
            </p>
          </div>

          <div className="w-2/3 mx-auto mt-10 rounded-lg bg-emerald-100 px-7 py-8 mb-28 text-center">
            <h3 className="text-2xl font-semibold">
              Q4: What is useMemo in react?
            </h3>
            <p className="text-lg mt-2">
              {" "}
              <span className="text-xl font-medium"></span> The useMemo is
              similar to useCallback hook as it accepts a function and a list of
              dependencies but it returns the memoized value returned by the
              passed function. It recalculated the value only when one of its
              dependencies change. It is useful to avoid expensive calculations
              on every render when the returned value is not going to change.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
