import React from "react";

const Blog = () => {
  return (
    <div className="mx-20 my-10 shadow-xl border">
      <div className="p-10">
        <h1 className="text-4xl text-left font-semibold">
          Blog-1: What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="text-justify mt-10">
          Managing state in your React apps isn’t as simple as using useState or
          useReducer. Not only are there are a lot of different kinds of state,
          but there often dozens of ways of managing each kind. Which should you
          choose? In this guide, we will uncover the several kinds of state in
          your React apps that you might not be aware of, plus how to manage
          them in the most effective way.
          <br></br>
          <br></br>
          <b className="text-2xl">The Four Kinds of React State to Manage</b>
          <br></br>
          When we talk about state in our applications, it’s important to be
          clear about what types of state actually matter. There are four main
          types of state you need to properly manage in your React apps:
          <ol className="list-decimal list-inside pt-2">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ol>
          Let's cover each of these in detail:<br></br>
          <b>Local (UI) state –</b> Local state is data we manage in one or
          another component. Local state is most often managed in React using
          the useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs.<br></br>
          <br></br>
          <b>Global (UI) state –</b> Global state is data we manage across
          multiple components. Global state is necessary when we want to get and
          update data anywhere in our app, or in multiple components at least. A
          common example of global state is authenticated user state. If a user
          is logged into our app, it is necessary to get and change their data
          throughout our application. Sometimes state we think should be local
          might become global.<br></br>
          <br></br>
          <b>Server state –</b> Data that comes from an external server that
          must be integrated with our UI state. Server state is a simple
          concept, but can be hard to manage alongside all of our local and
          global UI state. There are several pieces of state that must be
          managed every time you fetch or update data from an external server,
          including loading and error state. Fortunately there are tools such as
          SWR and React Query that make managing server state much easier.{" "}
          <br></br>
          <br></br>
          <b>URL state –</b> Data that exists on our URLs, including the
          pathname and query parameters. URL state is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL!<br></br>
          There are undoubtedly more pieces of state that we could identify, but
          these are the major categories worth focusing on for most applications
          you build.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-4xl text-left font-semibold">
          Blog-2: How does prototypical inheritance work?
        </h1>
        <p className="text-justify mt-10">
          Everything in Javascript is an object. Even when creating a Class is
          an Object via an Object Literal or Constructor Function. This is how
          Javascript does class-based programming as to other traditional
          Object-Oriented Programming languages where they use the keyword
          ‘class’ and ‘inheritance’.<br></br>
          <br></br>
          Javascript’s version of class-based programming and other traditional
          class-based programming languages work with the same concept but does
          not work exactly similar. There are differences in its keyword,
          syntax, and how it works. There are also debates regarding pros and
          cons of Javascript’s version of class-based programming, but for
          simplicity’s sake and learning purposes, I do not want to go over
          those issues. See details here
          [http://www.2ality.com/2011/11/javascript-classes.html].<br></br>
          <br></br>
          So, the core idea of Prototypal Inheritance is that an object can
          point to another object and inherit all its properties. The main
          purpose is to allow multiple instances of an object to share common
          properties, hence, the Singleton Pattern.<br></br>
          Below is a sample code with comments and caption to better see how it
          works:<br></br>
          After going through the code, its best to read further about
          Prototypal Inheritance from mozilla doc. Code example below is just
          one of many ways of implementing Prototypal Inheritance.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-4xl text-left font-semibold">
          Blog-3: What is a unit test? Why should we write unit tests?
        </h1>
        <p className="text-justify mt-10">
          <b className="text-xl">What is Unit Test?</b>
          <br></br>A unit test is a way of testing a unit - the smallest piece
          of code that can be logically isolated in a system. In most
          programming languages, that is a function, a subroutine, a method or
          property. The isolated part of the definition is important. In his
          book "Working Effectively with Legacy Code", author Michael Feathers
          states that such tests are not unit tests when they rely on external
          systems: “If it talks to the database, it talks across the network, it
          touches the file system, it requires system configuration, or it can't
          be run at the same time as any other test."<br></br>
          <br></br>
          Modern versions of unit testing can be found in frameworks like JUnit,
          or testing tools like TestComplete. Look a little further and you will
          find SUnit, the mother of all unit testing frameworks created by Kent
          Beck, and a reference in chapter 5 of The Art of Software Testing .
          Before that, it's mostly a mystery. I asked Jerry Weinberg about his
          experiences with unit testing -- "We did unit testing in 1956. As far
          as I knew, it was always done, as long as there were computers".
          <br></br>
          Regardless of when and where unit testing began, one thing is for
          sure. Unit testing is here to stay. Let's look at some more practical
          aspects of unit testing.<br></br>
          <br></br>
          <b className="text-xl">Why should we write unit tests?</b>
          <br></br>
          Frequently, unit testing is considered part of the programming phase,
          with the person that wrote the program...unit testing". That isn't
          because programmers hold the secret sauce to unit testing, it's
          because it makes sense. The programmer that wrote the prod code will
          likely know how to access the parts that can be tested easily and how
          to mock objects that can't be accessed otherwise. It's a time trade
          off.<br></br>
          <br></br>
          Other times, someone will come in after the fact and write tests to
          help create safe guards while they refactor or further develop that
          area of the code base.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-4xl text-left font-semibold">
          Blog-4: React. vs Angular. vs Vue?
        </h1>
        <p className="text-justify mt-10">
          <b className="text-xl">What is React?</b>
          <br></br>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
          <br></br>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs. Since component logic is written in
          JavaScript instead of templates, you can easily pass rich data through
          your app and keep state out of the DOM.<br></br>
          <br></br>
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing code.
          React can also render on the server using Node and power mobile apps
          using React Native.<br></br>
          <br></br>
          <b className="text-xl">What is Angular?</b>
          <br></br>
          Learn one way to build applications with Angular and reuse your code
          and abilities to build apps for any deployment target. For web, mobile
          web, native mobile and native desktop. Achieve the maximum speed
          possible on the Web Platform today, and take it further, via Web
          Workers and server-side rendering.<br></br>Angular puts you in control
          over scalability. Meet huge data requirements by building data models
          on RxJS, Immutable.js or another push-model.<br></br>
          <br></br>
          Build features quickly with simple, declarative templates. Extend the
          template language with your own components and use a wide array of
          existing components. Get immediate Angular-specific help and feedback
          with nearly every IDE and editor. All this comes together so you can
          focus on building amazing apps rather than trying to make the code
          work.
          <br></br>
          <br></br>
          <b className="text-xl">What is Vue?</b>
          <br></br>
          Vue (pronounced /vjuː/, like view) is a JavaScript framework for
          building user interfaces. It builds on top of standard HTML, CSS, and
          JavaScript and provides a declarative and component-based programming
          model that helps you efficiently develop user interfaces, be they
          simple or complex.
        </p>
      </div>
    </div>
  );
};

export default Blog;
