import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addBook } from "../modules/books";
import RenderOnRole from "./RenderOnRole";

const BookForm = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !description) {
      return;
    }
    dispatch(addBook({ name, description }))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>New Project</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"
                   value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" placeholder="Description"
                   value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <RenderOnRole roles={['user']}>
            <button type="submit" className="btn btn-primary">Add book</button>
          </RenderOnRole>
        </form>
      </div>
    </div>
  );
}

export default BookForm
