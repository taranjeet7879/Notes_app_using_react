import React, {useState} from 'react'

const App = () => {
  
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask)
    setTitle("")
    setDetails("")
  }


  return (
    <div className='h-100% bg-stone-700 p-6'>
      <form onSubmit={(e)=>{submitHandler(e)}} action="" className='flex p-6 text-white gap-5 justify-around'>
        <div className='flex flex-col gap-5 p-6 bg-stone-800/30 rounded-2xl w-2/4'>
          <input 
            type="text" 
            className='p-2 border-2 rounded focus:outline-none focus:ring-0 font-bold' 
            placeholder='Enter Notes Heading' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea 
            className='p-2 border-2 rounded focus:outline-none focus:ring-0 h-28 font-medium align-top' 
            placeholder='Write Details' 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded active:transform active:scale-98 active:bg-blue-500'>Add Notes</button>
        </div>
        <img className='rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />
      </form>
      <div className='pl-15 rounded-2xl p-6 bg-stone-500/30 mt-5 border-l-2 border-t-4 border-amber-500'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap w-full h-96 gap-8 mt-5 overflow-auto scrollbar-none'>
          {task.map((item, index) => (
            <div key={index} className="h-62 w-62 rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.FcjN2eeczhaeVxLjTULUpgHaJl?w=208&h=270&c=1&r=0&o=7&dpr=1.3&pid=1.7&rm=1')] bg-cover p-4 flex flex-col gap-2 overflow-auto scrollbar-none capitalize focus-within:outline-none focus-within:ring-0 relative">
              <div className='absolute bottom-2 right-2 cursor-pointer text-red-800 hover:text-red-500 hover:bg-red-800 text-xs bg-red-500 h-4 w-4 rounded-full flex items-center justify-center' onClick={()=>{
                const copyTask = [...task];
                copyTask.splice(index, 1);
                setTask(copyTask);
              }}>X</div>
              <h2 className='text-sm font-bold'>{item.title}</h2>
              <p className='text-xs text-gray-900'>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
