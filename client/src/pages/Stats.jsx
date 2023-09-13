import { BsClipboard2Fill, BsClipboard2CheckFill, BsClipboard2PulseFill, BsClipboard2XFill, BsExclamationTriangleFill, BsFillAlarmFill, BsFillInfoSquareFill } from 'react-icons/bs'

const Stats = () => {
  return (
    <div className="p-20 w-full max-h-[100vh] scroll-smooth overflow-y-auto text-bluePrimary duration-200 ease-in-out cursor-default">
      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillInfoSquareFill />Tasks Management Overview</h1>
        <p className="mt-5 text-sm">Tasks Management Overview provides a comprehensive view of your task-related activities, helping you efficiently organize, track, and prioritize your tasks. Gain insights into your task management process and stay in control of your workload.</p>

        {/* CARD SECTION */}
        <div className="grid grid-cols-4 gap-x-10 text-bluePrimary mt-10">

          <div className="bg-greyPrimary rounded-md py-1 px-1 h-mediumCard w-mediumCard min-h-[120px] max-h-[120px] border-[0.5px] border-black drop-shadow-xl cursor-default hover">
            <h4 className="text-xs mt-1 flex gap-x-2 ml-3"><span className='my-auto'><BsClipboard2Fill /></span>  TOTAL TASK CREATED</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-success rounded-md py-1 px-1 h-mediumCard w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1 flex gap-x-2 ml-3"><span className='my-auto'><BsClipboard2CheckFill /></span>  COMPLETED TASKS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-warning rounded-md py-1 px-1 h-mediumCard w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1 flex gap-x-2 ml-3"><span className='my-auto'><BsClipboard2PulseFill /></span>  TASKS IN PROGRESS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-danger rounded-md py-1 px-1 h-mediumCard w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1 flex gap-x-2 ml-3"><span className='my-auto'><BsClipboard2XFill /></span>  TASKS ON HOLD</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>
        </div>

        <p className="text-right my-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show More ...</p>
      </section>

      <section>
        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsFillAlarmFill />Recently Added Tasks</h1>
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

        <h1 className="text-2xl font-semibold text-purplePrimary flex items-center gap-x-4"> <BsExclamationTriangleFill /> Priority Tasks Overview</h1>
        <p className="mt-5 text-sm">The Priority Task Overview provides a concise summary of your most important and time-sensitive tasks. It offers a quick glance at high-priority items, allowing you to focus on what needs immediate attention and ensuring you stay on top of critical assignments</p>

        <div className="flex justify-between w-[80%] mx-auto gap-x-10 text-bluePrimary mt-10">

          <div className="bg-success rounded-md py-1 px-1 h-[120px] w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">LESS PRIORITY TASKS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-warning rounded-md py-1 px-1 h-[120px] w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">MEDIUM PRIORITY TASKS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>

          <div className="bg-danger rounded-md py-1 px-1 h-[120px] w-mediumCard border-[0.5px] border-black drop-shadow-xl">
            <h4 className="text-xs mt-1">HIGH PRIORITY TASKS</h4>
            <p className="text-center text-5xl mt-5 font-semibold text-bluePrimary h-full">20</p>
          </div>
          
        </div>

        {/* PRIORITY TASKS TABLE */}
        <div className="mt-10 w-full bg-greyPrimary p-4 rounded-lg min-h-[300px]">
          <h3 className="font-semibold text-xl text-purplePrimary mt-4">Priority Tasks</h3>
          <p className="text-sm mt-2">View and manage high-priority tasks that require immediate attention.  </p>

          <article className="mx-auto mt-10 flex flex-col gap-y-2">

              <div className="flex items-stretch justify-between py-2 bg-white text-sm px-4 border rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">High </h5>
              </div>

              <div className="flex items-stretch justify-between bg-white  py-2 text-sm px-4 rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-warning text-white py-1 px-2 rounded-md">Mid</h5>
              </div>

              <div className="flex items-stretch justify-between bg-white py-2 text-sm px-4 rounded-md">
                <p className="truncate my-auto">1</p>
                <h5 className="truncate my-auto">Meeting with Marketing Team</h5>
                <h5 className="truncate my-auto">Monday, 1st</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">On Hold</h5>
                <h5 className="bg-danger text-white py-1 px-2 rounded-md">High </h5>
              </div>
          </article>

          <p className="text-right mt-10 text-sm hover:underline hover:font-semibold text-purplePrimary cursor-default duration-200 ease-in-out">Show All ...</p>
        </div>
      </section>
    </div>
  )
}

export default Stats