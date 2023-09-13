
const Stats = () => {
  return (
    <div className="p-20 w-full overflow-y-auto text-bluePrimary duration-200 ease-in-out">
      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary">Tasks Management Overview</h1>
        <p className="mt-5 text-sm">Tasks Management Overview provides a comprehensive view of your task-related activities, helping you efficiently organize, track, and prioritize your tasks. Gain insights into your task management process and stay in control of your workload.</p>

        {/* CARD SECTION */}
        <div className="grid grid-cols-4 gap-x-10 text-bluePrimary mt-10">

          <div className="bg-greyPrimary rounded-md py-1 px-1 h-[120px] min-h-[120px] max-h-[120px] border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">TOTAL TASK CREATED</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-success rounded-md py-1 px-1 h-[120px] border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">COMPLETED TASKS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-warning rounded-md py-1 px-1 h-[120px] border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">TASKS IN PROGRESS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-danger rounded-md py-1 px-1 h-[120px] border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">TASKS ON HOLD</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>
        </div>

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show More ...</p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary">Recently Added Tasks</h1>
        <p className="mt-5 text-sm">Recently Added Tasks to view the latest additions to your to-do list. Stay up-to-date with your most recent commitments and ensure nothing slips through the cracks.</p>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-x-7 mt-10">

          <div className="bg-greyPrimary p-4 rounded-md border-[0.5px] border-black hover:drop-shadow-xl cursor-default">
            <h5 className="truncate text-sm font-semibold">Meeting With Marketing ...</h5>
            <p className="text-xs my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu</p>
            <p className="text-center text-purplePrimary text-xs hover:underline hover:font-semibold cursor-default">Show Detail</p>
          </div>

          <div className="bg-greyPrimary p-4 rounded-md border-[0.5px] border-black hover:drop-shadow-xl cursor-default">
            <h5 className="truncate text-sm font-semibold">Meeting With Marketing ...</h5>
            <p className="text-xs my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu</p>
            <p className="text-center text-purplePrimary text-xs hover:underline hover:font-semibold cursor-default">Show Detail</p>
          </div>

          <div className="bg-greyPrimary p-4 rounded-md border-[0.5px] border-black hover:drop-shadow-xl cursor-default">
            <h5 className="truncate text-sm font-semibold">Meeting With Marketing ...</h5>
            <p className="text-xs my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu</p>
            <p className="text-center text-purplePrimary text-xs hover:underline hover:font-semibold cursor-default">Show Detail</p>
          </div>

          <div className="bg-greyPrimary p-4 rounded-md border-[0.5px] border-black hover:drop-shadow-xl cursor-default">
            <h5 className="truncate text-sm font-semibold">Meeting With Marketing ...</h5>
            <p className="text-xs my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetu</p>
            <p className="text-center text-purplePrimary text-xs hover:underline hover:font-semibold cursor-default">Show Detail</p>
          </div>

        </div>

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary">Priority Tasks Overview</h1>
        <p className="mt-5 text-sm">The Priority Task Overview provides a concise summary of your most important and time-sensitive tasks. It offers a quick glance at high-priority items, allowing you to focus on what needs immediate attention and ensuring you stay on top of critical assignments</p>
      </section>
    </div>
  )
}

export default Stats