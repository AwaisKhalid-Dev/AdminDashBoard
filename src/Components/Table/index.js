import React from 'react';


const authors = [
    {
        name:"Jhon",
        function:"Manager",
        status:"online",
        employedDate:"1/1/2024",
      },  {
        name:"Alexa",
        function:"Auditor",
        status:"Offline",
        employedDate:"10/1/2024",
      },
];

const AuthorTable = () => {
  return (
    <div className="container mt-3 bg-white b-rounded-lg p-3">
      <h2>Callers Data </h2>
      <table className="table my-3 ">
        <thead className="thead-light text-secondary ">
          <tr>
            <th className='text-secondary '>Author</th>
            <th className='text-secondary'>Function</th>
            <th className='text-secondary'>Status</th>
            <th className='text-secondary'>Employed</th>
            <th className='text-secondary'>Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{author.name}<br/></td>
              <td>{author.function}</td>
              <td>
                <span className={`badge  ${author.status === 'online' ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>
                  {author.status}
                </span>
              </td>
              <td>{author.employedDate}</td>
              <td><button className="btn bg-light text-secondary">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTable;
