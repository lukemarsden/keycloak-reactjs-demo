import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import { allBooks, deleteBook } from "../modules/books";

const BookList = () => {

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allBooks())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO: split this out into "my projects", "shared with me", "team/org
  // projects", "sample projects"

  // TODO: Filter by projects that _I_ (the currently logged in user) actually have
  // read/write permission on

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Projects</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>ID</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.name}</td>
                <td>{book.displayName}</td>
                <td>{book._id}</td>
                <td>{book.owner.id}</td>
                <td>
                  <button className="btn btn-xs btn-danger" onClick={() => dispatch(deleteBook(book))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList
