import React from 'react';
import Footer from '../../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <div className='bg-gray-100 h-screen pt-16'>
            <div className='flex justify-center mx-5'>
            <div>
                <h2 className='font-semibold text-2xl mb-4 '>Difference Between JavaScript and Nodejs</h2>
                <p className='mb-5'>
                1. Javascript is a web scripting language. NodeJS is a runtime environment for Javascript.
                 <br />
                  2. Javascript is only accessible in browsers. With the help of NodeJS, we can execute Javascript outside of the browser. 
                  <br /> 
                  3. Javascript has the ability to add HTML and manipulate the DOM. Nodejs does not support adding HTML tags.
                  <br /> 
                  4.  Javascript is mostly used on the client's end where NodeJS is used on server side. 
                  <br /> 
                  5. Javascript is compatible with all browser engines, including Safari's JS core and Firefox's Spidermonkey. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                </p>

                <h2 className='font-semibold text-2xl mb-4'>When should you use nodejs and when should you use mongodb?</h2>
                <p className='mb-5'>
                Node.js is known for its speed and performance. Because Nodejs can manage a large stream of small messages, it can be used for real-time messaging or chatting. NodeJS can be extremely beneficial when dealing with large volumes of data. Large amounts of data can also be transported in smaller bundles using NodeJS. MongoDB is an open source, cross-platform document-oriented database program. Mongodb would be a suitable fit if we can describe our data as a collection of documents. Mongodb can be used to build programs that scale smoothly and evolve efficiently.
                </p>


                <h2 className='font-semibold text-2xl mb-4'>Differences between sql and nosql databases.</h2>
                <p className='mb-5'>
                1. SQL databases are known as Relational Database Management Systems (RDBMS), whereas NoSQL databases are known as non-relational or distributed databases. 
                <br /> 
                2. SQL databases have a predetermined schema that is fixed, static, or both. NoSQL databases have a flexible schema. 
                <br /> 
                3. The ACID characteristics (Atomicity, Consistency, Isolation, and Durability) are followed by SQL databases, but the Brewers CAP theorem is followed by NoSQL databases (Consistency, Availability and Partition tolerance). 
                <br /> 
                4. SQL databases are not designed to store hierarchical data. NoSQL databases are great for storing hierarchical data.
                <br /> 
                5. Tables are used in SQL databases. NoSQL databases, on the other hand, are either key-value pairs, document-based databases, graph databases, or wide-column stores.
                </p>
            </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Blogs;