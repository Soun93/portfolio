import './Pagination.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPosts / postsPerPage) },
    (_, i) => i + 1
  );

    return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => {
          <li key={number} className='number pagination-index'>
            <a onClick={ ()=> paginate(number) }href="!#">
              {number}
            </a>
          </li>
        })}
      </ul>
    </div>
  );
}

export default Pagination;