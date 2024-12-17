import React from "react";
import PlusIcon from "../icons/Plus.svg";

function AddTask(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a new task"
        value={props.task}
        onChange={props.handleChange}
      />
      <button type="submit" className="button">
        <img src={PlusIcon} alt="plus" />
      </button>
    </form>
  );
}

export default AddTask;
