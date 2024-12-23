import React from 'react';
import { Link } from 'react-router-dom'; // Use this if you're using React Router, otherwise use <a>.

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link ? (
              <Link
                to={item.link} // Use `to` if using React Router, otherwise use `href` with `<a>`
                className="hover:underline text-gray-500 font-bold text-lg"
              >
                {item.label}
              </Link>
            ) : (
              <span className='font-bold text-lg text-gray-500'>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">{'>'}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
