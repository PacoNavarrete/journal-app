export const NoteView = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-start mb-2">
      <p className="text-lg mt-10"> August 23, 2023</p>
      <button type='button' className=" flex items-center gap-2 px-2 bg-black">
        <p className="text-white text-lg">Save</p>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="white" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </button>
      <div className="flex flex-col w-full gap-5">
        <input type="text" placeholder='Day title' className=' outline-black border-2 h-10 rounded-md'/>
        <textarea name="" placeholder='What happen today?' id="" cols="30" rows="10" className="outline-black border-2 rounded-md"></textarea>
      </div>
    </div>
  );
};
