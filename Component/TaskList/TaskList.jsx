import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2>Task</h2>
      </div>
    </div>
  );
};

export default TaskList;
