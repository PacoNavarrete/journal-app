import { NavBar } from '../component/NavBar';
import { SideBar } from '../component/SideBar';

export const JournalLayout = ({ children }) => {

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex flex-row p-5 gap-5'>
      <SideBar />
        <div className=' max-w-[800px] flex flex-col mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};
